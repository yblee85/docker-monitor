import express from 'express';
import container_router from './containers/index.js';


const apiRouter = express.Router();

apiRouter.use('/containers', container_router);

export default apiRouter;