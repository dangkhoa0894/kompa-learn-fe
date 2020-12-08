FROM node:12 as builder

# WORKDIR /app
# COPY package.json ./
# RUN yarn
WORKDIR /app
COPY . .


# RUN yarn build

# 2. Deploy our Angular app to NGINX
FROM nginx:alpine
## Replace the default nginx index page with our Angular app
COPY --from=builder /app/build /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/nginx.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]
