FROM node:20.14.0

WORKDIR /app

COPY package.json .

ARG NODE_ENV
RUN if [ "$NODE_ENV" = "production"]; \
    then npm install --only=production; \
    else npm install; \
    fi

COPY . .

EXPOSE 5000

CMD [ "npm", "start" ]

