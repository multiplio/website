FROM nginx:alpine

# nginx config
COPY ./default.conf /etc/nginx/conf.d/default.conf

# site contents
COPY ./dist/ /usr/share/nginx/html/
