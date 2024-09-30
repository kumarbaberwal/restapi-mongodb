import express, { Request, Response } from "express";

const app = express();

const port = process.env.port || 8080;

app.get('/', (req: Request, res: Response)=>{
    res.send('Server is sending response');
});

app.listen(port, ()=>{
    console.log(`Server is running on port http://localhost:${port}`);
});