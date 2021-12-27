FROM node:16

RUN node -v

RUN yarn -v

RUN mkdir /myapp

WORKDIR /myapp

COPY . /myapp

RUN yarn install

CMD node server.js

