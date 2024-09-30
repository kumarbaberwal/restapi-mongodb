import { MongoClient } from "mongodb";
import { Request, Response } from "express";    

const url = "mongodb://localhost:27017/";


export const  getusers = async(req: Request, res: Response) =>{
    const client = new MongoClient(url);

    const db = await client.db('Auth');

    const collection = await db.collection('users');


    var result = await collection.find().toArray();

    res.json(result);

};