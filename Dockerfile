FROM node:14-alpine as builder

COPY ./package.json ./
RUN npm i -s
COPY . .

EXPOSE 5000

CMD npm start