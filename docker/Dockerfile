FROM node:latest as builder
WORKDIR /usr/src/
RUN git clone https://github.com/gsej/endpoint.hitter.git
WORKDIR /usr/src/endpoint.hitter/web
RUN yarn
ENV PATH /usr/src/endpoint.hitter/web/node_modules/.bin:$PATH
RUN yarn build

FROM nginx

ARG BUILD_NUMBER
ENV BUILD_NUMBER=${BUILD_NUMBER}

COPY --from=builder /usr/src/endpoint.hitter/web/dist/endpointHitter/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/

CMD [ "/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/settings.template.json > /usr/share/nginx/html/assets/settings.json && exec nginx -g 'daemon off;'"]