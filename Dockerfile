FROM node:14-alpine as builder

# Switch to rootless user node (included in the node image)
USER node

# Workdir
WORKDIR /home/node

COPY ./package*.json ./

RUN npm install
COPY --chown=node:node ./ ./

COPY ./ .