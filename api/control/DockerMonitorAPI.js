import Dockerode from "dockerode";

const docker = new Dockerode();

// var docker = new Dockerode({
//     host: '192.168.1.10',
//     port: process.env.DOCKER_PORT || 2375,
//     ca: fs.readFileSync('ca.pem'),
//     cert: fs.readFileSync('cert.pem'),
//     key: fs.readFileSync('key.pem'),
//     version: 'v1.25' // required when Docker >= v1.13, https://docs.docker.com/engine/api/version-history/
//   });

const getContainers = async () => {
    const liContainers = await docker.listContainers();
    return liContainers;
}

const inspectContainer = async (cid) => {
    const container = getContainer(cid);
    const resp = await container.inspect();
    return resp;
}

const getContainer = (cid) => {
    const continer = docker.getContainer(cid);
    return continer;
}


export { getContainers, getContainer, inspectContainer };