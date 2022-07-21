FROM node:18-alpine3.16 as base

RUN apk update && apk upgrade && \
    rm -rf /var/cache/apk/* && mkdir -p /usr/src/app

RUN chown -R node:node /usr/src/app
WORKDIR /usr/src/app
COPY --chown=node:node package*.json ./
USER node
RUN npm i

FROM base as ${NODE_ENV}
WORKDIR /usr/src/app
USER node
ENV NODE_ENV=${NODE_ENV}
COPY --chown=node:node --from=base /usr/src/app/node_modules ./node_modules
COPY --chown=node:node ["./*.js", "package*.json", ".env", "./"]
EXPOSE ${PORT}
CMD ["npm", "run", "${NODE_ENV}"]
