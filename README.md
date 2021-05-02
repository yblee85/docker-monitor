![Build Status](https://github.com/yblee85/docker-monitor/workflows/web_build_test/badge.svg)

# Docker Monitor 
This will give you status of docker containers in your local machine.


## Sytem Overview
```
[ Client ]  -> [reverse proxy] ->  localhost:8080  ->   [ webapp ]
                               ->  /api           ->   [  api + agent  ]

Client : browser (from your localmachine)
webapp : react webapp
api : provide docker containers stat in json response
agent : get docker containers stat
```



## Available Scripts

In the project directory, you can run:

### `docker-compose up` and go to localhsot:8080
### if you want to test swarm mode : in terminal, run sh docker_swarm_test.sh

## Roadmap
1. create an api (+ agent) that gets local machines containers stat
2. create simple reactapp that shows stats
3. dockerize them
4. take a look at docker swarm to implement in this system


## Future improvement
1. add db that runs locally
2. split api and agent : agent is responsible for get stats from localmachine and store in db
3. api is responsible to get (latest) stat from db
4. we can maybe introduce queue like rabbitmq so every so often (timer) it will send stat to queue (and db will be just local backup that gets emptied)
5. queue will be consumed by consumer(s) and it will store in master db(s) and main webapp will call main api to get reports in entire network (VPC)
6. need to add more unittest codes