# Minimal static file server (single ~4 MB binary, no nginx)
FROM joseluisq/static-web-server:2-alpine

# Copy the static website files built by `docusaurus build`
COPY build/ /public/

# Extensionless URLs (/getting-started -> getting-started.html) work out of the box; 404 uses the Docusaurus page
ENV SERVER_PORT=80 \
    SERVER_ROOT=/public \
    SERVER_ERROR_PAGE_404=/public/404.html \
    SERVER_LOG_LEVEL=warn

EXPOSE 80
