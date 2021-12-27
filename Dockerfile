FROM node:14

RUN node -v

RUN mkdir /myapp

COPY ./server.js /myapp/

CMD node /myapp/server.js


