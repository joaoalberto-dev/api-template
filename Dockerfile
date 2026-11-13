FROM node:22-alpine

WORKDIR /app
ENV NODE_ENV=production PORT=5000

# Em uma API real: COPY package*.json ./ && RUN npm ci --omit=dev
COPY server.js ./
# O Dokku lê o app.json do WORKDIR da imagem (healthchecks, cron, etc.)
COPY app.json ./

USER node
EXPOSE 5000
CMD ["node", "server.js"]
