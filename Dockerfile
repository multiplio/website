FROM docker.pkg.github.com/multiplio/docker-lighttpd-alpine/lighttpd-alpine:1.0.0

# site contents
COPY ./dist/ /var/www/localhost/htdocs/
