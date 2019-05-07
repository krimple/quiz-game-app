FROM node:11 as builder

COPY package.json .

COPY package-lock.json .

RUN npm install -g typescript

RUN npm install

FROM builder

COPY . .

RUN tsc

ENTRYPOINT ["/bin/sh", "-c", "NODE_OPTIONS=\"--max-old-space-size=8192\" npm start dist/server/server.js"]

