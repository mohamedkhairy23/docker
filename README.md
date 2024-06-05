## To create an image from a docker file:

- docker build -t name-of-docker-image .
  OR
- docker build -t name-of-docker-image Dockerfile

## To display all docker images:

- docker image ls

## To create a container from an image:

- docker run --name container-name -d -p 5000:5000 name-of-docker-image

## To stop running specific container:

- docker stop name-of-container

## For stoping and removing a specific container:

- docker rm name-of-container -f

## For displaying docker containers:

- docker ps

## For executing a command on a running container (Example):

- docker exec -it name-of-container bash

## To show docker environments:

- docker exec -it name-of-container bash
- printenv

## Logs of container:

- docker logs name-of-container

## Volumes of container (Example):

- docker run --name express-node-app-container -v $(pwd):/app:ro -v /app/node_modules -d -p 5000:5000 express-node-app

## To run a docker-compose file that is responsible for running a docker container:

- docker-compose up -d

## To close or removing a docker container by docker-compose cleanup:

- docker-compose down
