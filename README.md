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

- docker rm name -of-container -f

## For displaying docker containers:

- docker ps

## For executing a command on a specific container:

- docker exec -it express-node-app-container {{bash}}
