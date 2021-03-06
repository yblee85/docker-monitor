import express from 'express';
import router_handler from './routers/index.js';

// import axios from 'axios';
// import asyncMiddleware from './middleware/asyncMiddleware.js'
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

const app = express();

// use nginx to serve static file and all api can be reroute to api
// app.use(express.static(`${__dirname}/../build`))


 
// only for demo purose
app.use('/api', router_handler);


// app.get('/api/tasks', asyncMiddleware(async (req, res, next)=>{
//     // call db
//     const resp = await axios.get('http://db:3000/tasks');
//     console.log("tasks");
//     console.log(resp.data);
//     res.send(resp.data);
// }));

const port = process.env.PORT || 3002;
app.listen(port, ()=>{
    console.log(`server started and listening on port ${port}`);
})