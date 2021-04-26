FROM node:14.15.4-alpine
WORKDIR /app
RUN apk add  --no-cache ffmpeg
