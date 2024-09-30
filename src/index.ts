import express, { Request, Response } from "express";
import router from "./routers/tasks";

const app = express();
app.use(express.json());

const port = process.env.port || 8080;

app.get('/', (req: Request, res: Response)=>{
    res.send('Server is sending response');
});


app.use('/tasks', router);
app.listen(port, ()=>{
    console.log(`Server is running on port http://localhost:${port}`);
});