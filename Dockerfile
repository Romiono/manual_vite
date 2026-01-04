FROM nginx:alpine
LABEL authors="romashka"

WORKDIR /app

RUN apk update && apk add --no-cache nodejs npm

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN cp -r /app/dist/* /usr/share/nginx/html/

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80