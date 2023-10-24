FROM node:latest

WORKDIR /mediaservice

COPY . .

RUN npm install

CMD [ "node" , "index.js" ]