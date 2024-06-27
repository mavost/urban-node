# A node app showcase

*Date:* 2024-06-27  
*Author:* MvS  
*keywords:* software-architecture, docker-compose, node

## Description

Based on the tutorial by [Ashwin](https://ashwin9798.medium.com/nginx-with-docker-and-node-js-a-beginners-guide-434fe1216b6b) on [Medium](https://medium.com).

Use as a template for a docker-compose based image builds and deployments using a
`Makefile` and an `.env` file for customization.

## Running the Docker compose pipeline

1. Copy `.env.dist` to `.env` (no adjustments required / for future use with credentials)
2. Run `make run-compose` and let the container for the *simple* stack come online.
3. Use <kbd>CTRL</kbd>+<kbd>C</kbd> to shut down the stack
4. Invoke `make clean` and `make clean stack=extended`, respectively to remove the stack

### Manual access to container

Using compose:  
`docker-compose exec <container-name> env SAMPLEPAR="testing" bash`

Using docker:  
`docker exec -it <container-name> bash`
