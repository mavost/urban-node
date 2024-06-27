# syntax=docker/dockerfile:1
# pull the Node.js Docker image
ARG BASEIMAGE
FROM ${BASEIMAGE}


# create the directory inside the container
WORKDIR /usr/src/app

# copy the package.json files from local machine to the workdir in container
ADD app /usr/src/app

# run npm install in our local machine
RUN npm install

# our app is running on port 5000 within the container, so need to expose it
EXPOSE 5000

# the command that starts our app
#CMD ["node", "index.js"]
CMD ["npx", "nodemon", "index.js"]