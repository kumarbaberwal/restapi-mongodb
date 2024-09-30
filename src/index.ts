import express, { Request, Response } from "express";
import router from "./routers/routes";



const app = express();
app.use(express.json());

const port = process.env.port || 8080;

app.get('/', (req: Request, res: Response)=>{
    res.send('Server is sending response');
});


app.use('/', router);
app.listen(port, ()=>{
    console.log(`Server is running on port http://localhost:${port}`);
});