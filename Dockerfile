FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY . .

EXPOSE 3085

ENV PORT=3085
ENV NODE_ENV=production

CMD ["node", "server.js"]
