# Stage 0, based on Node.js, to build and compile Angular
FROM node:8.9 as node

#copy both packages into the application
COPY package.json package-lock.json ./

#run initial npm setup to cleanup
RUN npm set progress=false && npm config set depth 0 && npm cache clean --force


## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm i && mkdir /ng-app && cp -R ./node_modules ./ng-app

#set working directory to the app directory
WORKDIR /ng-app

#copy files now includes node modules
COPY . .

ARG env=prod

## Build the angular app in production mode and store the artifacts in dist folder
#RUN $(npm bin)/ng build --prod --build-optimizer --environment $env
RUN $(npm bin)/ng build-prod


# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.13

#copy our config for nginx
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

#copy our app
COPY --from=node /ng-app/dist/ /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
