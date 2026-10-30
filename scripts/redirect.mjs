import { mkdirSync, writeFileSync, copyFileSync } from "node:fs";
mkdirSync("dist", { recursive: true });
writeFileSync(
  "dist/index.html",
  '<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=/chess/"><link rel="canonical" href="https://rodniy.com/chess/"><title>Родной ход</title></head><body><a href="/chess/">Перейти в шахматную мастерскую</a><script>location.replace("/chess/")</script></body></html>',
);
copyFileSync("CNAME", "dist/CNAME");
writeFileSync("dist/.nojekyll", "");
