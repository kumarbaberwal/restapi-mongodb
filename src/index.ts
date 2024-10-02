import express, { Request, Response } from "express";
import mongoose, { mongo } from "mongoose";
import router from "./routers/routes";



const app = express();
app.use(express.json());

const port = process.env.port || 8080;

app.get('/', (req: Request, res: Response)=>{
    res.send('Server is sending response');
});

const url = "mongodb://localhost:27017/Auth";
mongoose.Promise = Promise;
mongoose.connect(url);
mongoose.connection.on("connected", ()=> {
    console.log('Connection Established !!!');
});

mongoose.connection.on("error", (error: Error)=>{
    console.log(error);
});


app.use('/', router);
app.listen(port, ()=>{
    console.log(`Server is running on port http://localhost:${port}`);
});