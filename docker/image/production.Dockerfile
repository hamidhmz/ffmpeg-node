FROM node:14.15.4-alpine
WORKDIR /app
RUN apk add  --no-cache ffmpeg

COPY package.json ./
COPY yarn.lock ./
RUN yarn install 
COPY . ./

CMD ["yarn","start"]