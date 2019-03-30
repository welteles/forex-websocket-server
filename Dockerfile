FROM node:lastest
MAINTAINER Wellington Rocha <wellington.rocha@atlasproj.com>
RUN mkdir -p /app
COPY package.json /app/
WORKDIR /app
RUN npm i
COPY . /app
RUN npm run build