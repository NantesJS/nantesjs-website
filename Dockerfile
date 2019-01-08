# specify the node base image with your desired version node:<version>
FROM node:10

COPY package.json ./
COPY yarn.lock ./

RUN yarn install 

COPY . .

# replace this with your application's default port
EXPOSE 8000

CMD [ "yarn", "build" ]
