FROM node:latest
WORKDIR /app
ADD index.js /app
ADD package.json /app
RUN npm install
EXPOSE 3000
CMD npm run start