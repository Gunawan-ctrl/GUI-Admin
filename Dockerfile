FROM node:20.11.1-bookworm as node-builder
WORKDIR /app
COPY . /app

RUN npm install --legacy-peer-deps
RUN npm run build

FROM nginx:alpine3.18-slim

LABEL maintainer="Rizul Hanif"

COPY --from=node-builder /app/dist /usr/share/nginx/html
COPY ./.docker/nginx.conf /etc/nginx/conf.d/default.conf
