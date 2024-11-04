# Use the official NGINX base image
FROM nginx:alpine

# Copy the static website files from the build directory to the NGINX default directory
COPY build/ /usr/share/nginx/html/
COPY docker/nginx.conf /etc/nginx/nginx.conf

# Expose port 80 to allow external access
EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]