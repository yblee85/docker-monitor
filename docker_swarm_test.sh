docker swarm init
docker service create --replicas 2 -p 1010:2020 --name webswarm nginx
