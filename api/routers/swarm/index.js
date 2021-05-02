import express from 'express';
import AsyncMiddleware from "../../middleware/asyncMiddleware.js";
import { getListNodes, getListServices, getListTasks } from "../../control/DockerMonitorAPI.js";

const apiRouter = express.Router();


apiRouter.get('/nodes', AsyncMiddleware( async (req, res, next)=>{
    try {
        const liNodes = await getListNodes();
        res.json(liNodes);
    } catch(err) {
        // swarm not setup?
        res.json({ error : true, message : err.message });
    }
}));


apiRouter.get('/services', AsyncMiddleware( async (req, res, next)=>{
    try {
        const liServices = await getListServices();
        res.json(liServices);
    } catch(err) {
        // swarm not setup?
        res.json({ error : true, message : err.message });
    }
}));

apiRouter.get('/tasks', AsyncMiddleware( async (req, res, next)=>{
    try {
        const liTasks = await getListTasks();
        res.json(liTasks);
    } catch(err) {
        // swarm not setup?
        res.json({ error : true, message : err.message });
    }
}));

export default apiRouter;