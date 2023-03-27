FROM node:18

WORKDIR /app

EXPOSE 6000

COPY index.js /app/index.js

ENTRYPOINT [ "node", "/app/index.js" ]