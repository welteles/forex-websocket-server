FROM node:latest
MAINTAINER Wellington Rocha <c-s-w@hotmail.com>
RUN mkdir -p /app
COPY package.json /app/
WORKDIR /app
RUN npm i
COPY . /app
ENTRYPOINT npm run exchange-rate-api