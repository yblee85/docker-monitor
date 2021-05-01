import express from 'express';
import AsyncMiddleware from "../../middleware/asyncMiddleware.js";
import { getContainers, inspectContainer } from "../../control/DockerMonitorAPI.js";

const apiRouter = express.Router();


apiRouter.get('/', AsyncMiddleware( async (req, res, next)=>{
    const liContainers = await getContainers();
    res.json(liContainers);
}));


apiRouter.get('/inspect', AsyncMiddleware( async (req, res, next)=>{
    let { container_id } =  req.query;
    const containerData = await inspectContainer(container_id);
    res.json(containerData);
}));

export default apiRouter;