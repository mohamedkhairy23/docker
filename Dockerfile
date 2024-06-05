FROM node:20.14.0 as base


FROM base as development

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 5000
CMD [ "npm", "run", "dev" ]


FROM base as production

WORKDIR /app
COPY package.json .
RUN npm install --only=production
COPY . .
EXPOSE 5000
CMD [ "npm", "start" ]

