FROM node:24-bookworm-slim AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:24-bookworm-slim
WORKDIR /app
ENV NODE_ENV=production HOST=0.0.0.0 PORT=3000 DATABASE_PATH=/data/chess.sqlite
COPY --from=build /app /app
RUN mkdir /data && chown node:node /data
USER node
EXPOSE 3000
CMD ["npm", "start"]
