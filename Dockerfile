FROM node:14-alpine as builder

# Switch to rootless user node (included in the node image)
USER node

# Workdir
RUN mkdir -p /home/node/rocketdev.dev && chown -R node:node /home/node/rocketdev.dev
RUN mkdir -p /home/node/rocketdev.dev/build && chown -R node:node /home/node/rocketdev.dev/build
WORKDIR /home/node/rocketdev.dev

COPY ./rocketdev.dev/package*.json ./

RUN yarn install
COPY --chown=node:node ./rocketdev.dev ./

COPY ./rocketdev.dev .