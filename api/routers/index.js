import express from 'express';
import container_router from './containers/index.js';
import swarm_router from './swarm/index.js';


const apiRouter = express.Router();

apiRouter.use('/containers', container_router);
apiRouter.use('/swarm', swarm_router);

export default apiRouter;