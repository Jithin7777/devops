FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Build TypeScript → JavaScript
RUN npm run build

EXPOSE 5000

# Run the compiled JS file
CMD ["node", "dist/server.js"]
