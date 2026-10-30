# VPS deployment runbook

## Topology

Caddy terminates HTTPS for `rodniy.com` and proxies to the web service. The same host runs exactly one worker and shares a Docker named volume with the web process. SQLite must stay on a local persistent disk. Browsers only receive session cookies; Lichess credentials stay in the server environment.

A starting capacity target is 2 vCPU / 4 GB RAM with a persistent disk. This is headroom for the configured memory caps, **not a throughput promise**. Measure your own archive sample before selecting long-term capacity. Compose caps web at 512 MB/0.5 CPU, worker at 1536 MB/1 CPU and proxy at 256 MB. Stockfish uses 1 thread and a 64 MB hash; WASM/network/process memory is additional.

## Prepare before touching DNS

1. Provision an Ubuntu/Debian VPS through the owner's chosen provider. No purchase is automated.
2. Install Docker Engine and the Compose plugin from Docker's official repository. Enable SSH key access. Allow inbound TCP 80/443 and UDP 443; restrict SSH appropriately. Port 3000 does not need public exposure.
3. Clone this repository and check out the reviewed chess branch or release commit.
4. Copy `.env.example` to `.env`. Set a unique `OWNER_PASSWORD` of at least 16 characters, `LICHESS_TOKEN` if available, and `APP_ORIGIN=https://rodniy.com`. Compose sets the production host and database path. Do not reuse the temporary password used during development tests.
5. Build and start the web and worker:

```sh
docker compose build web
docker compose up -d web worker
docker compose exec web node -e "fetch('http://127.0.0.1:3000/health').then(r=>console.log(r.status))"
docker compose logs --tail=50 worker
```

For a pre-DNS browser test, use an SSH tunnel to the container host or a temporary domain with a matching `APP_ORIGIN`; do not disable CSRF/origin checks or authentication. A loopback-only published port can be added in an override for that test.

6. Run tests in a disposable container, not the production data volume:

```sh
docker compose run --rm --no-deps -e NODE_ENV=test web npm test
```

Tests override the database path with unique temporary files, and do not touch production data. No VPS runtime has been verified during initial development.

## DNS cutover and HTTPS

1. Preserve a record of the current DNS values and the previous GitHub Pages deployment for rollback.
2. Point the domain's A record to the VPS IPv4. Add an AAAA record only if IPv6 actually reaches the VPS; remove stale conflicting records. Point `www` at the same host if it is used. Manage these records through the owner's domain provider.
3. Start Caddy:

```sh
docker compose up -d proxy
```

Caddy obtains certificates automatically when DNS and ports are correct. Its certificate storage is persistent. The Caddyfile redirects `/` to `/chess/` with HTTP 308; the Node fallback redirects with 302. `www.rodniy.com` redirects to the apex hostname.

4. Verify:

```sh
curl -I https://rodniy.com/
curl -I https://rodniy.com/chess/
curl https://rodniy.com/chess/api/games
```

Expected: root redirect to `/chess/`, application 200, unauthenticated API 401. Sign in from a browser; import one short PGN; verify analysis and replay; complete a training branch; reload on another device and verify progress. Test Lichess with a valid token and Chess.com from the VPS network.

5. Run `npm run check:providers -- USERNAME` inside the web container. If Chess.com returns a challenge/403, keep PGN upload available and contact provider support; do not scrape protected pages or bypass challenges.

Do not merge a workflow that deploys the source tree as a GitHub Pages site. No such automatic publication workflow is installed. The old live site stays in place until DNS cutover.

## Persistence, backup and restore

Named volume `chess-data` contains `chess.sqlite`, WAL and SHM files. Never run `docker compose down -v` on production without a verified backup.

Create a consistent SQLite online backup rather than copying a live database without its WAL:

```sh
docker compose exec web node --import tsx scripts/backup.ts /data/backup.sqlite
docker compose cp web:/data/backup.sqlite ./backup.sqlite
```

Copy backups to the owner's chosen protected off-host location, configure retention, and rehearse restore. No backup destination or recurring job is configured without an owner-provided destination. The UI JSON export contains user records, but the SQLite backup is the operational restore format.

For restore, stop both web and worker, move the existing database and matching WAL/SHM aside, then run `scripts/restore.ts` against a verified backup. The script refuses to overwrite an existing target. Restart services and validate counts.

## Releases and rollback

Back up before changing versions. Build a new image from the reviewed commit, run checks, then `docker compose up -d web worker`. Jobs whose process died recover after a 90-second stale lease. The worker retries at most three attempts; failed/cancelled jobs can be retried from Settings.

To roll back code, check out the previous release commit and rebuild. Review migration compatibility before rollback; restore the matching backup if required. Keep the old DNS values until the new deployment is verified. Reverting DNS returns traffic to the prior GitHub Pages site while investigating a failed cutover.

## Operating limits

- One active worker service; job claims are transactional, but the supplied resource plan assumes one process.
- Stop requests finish/abort at a search boundary; a search has a 120-second watchdog.
- Node budgets are bounded (screen ≤1,000,000, deep ≤5,000,000). Larger full-archive work remains an operator choice.
- Monitor disk usage and back up before pruning caches or historical results.
- Secrets are environment variables in `.env` (ignored by Git), not encrypted in the container image. Protect the file and server access.
- Rotating the owner password should be accompanied by deleting existing session rows or restoring a clean session table, so prior sessions cannot continue.
