FROM node:13.3.0 AS compile-image

ENV PORT=4200

WORKDIR /opt/ng
COPY package.json ./

# ENV PATH="./node_modules/.bin:$PATH"

COPY . ./
# RUN ng build --prod
# RUN node_modules/.bin/ng build --prod
RUN npm install @angular/cli && npm install && npm run build

RUN echo $PORT

FROM nginx:1.17.1-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=compile-image /opt/ng/dist/sapp /usr/share/nginx/html
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'


#CMD sed -i -e 's/$PORT/'"$PORT"'/g' /usr/share/nginx/conf.d/default.conf && nginx -g 'daemon off;'
#COPY nginx.conf /etc/nginx/nginx.conf
#CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'