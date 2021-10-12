FROM node

WORKDIR /nest-api

COPY package*.json /nest-api/

RUN npm install

COPY . /nest-api/

EXPOSE 8000
CMD [ "npm", "dist/main"]
