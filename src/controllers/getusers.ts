// import { MongoClient } from "mongodb";
// import { Request, Response } from "express";    

// const url = "mongodb://localhost:27017/";


// export const  getusers = async(req: Request, res: Response) =>{

//     const client = new MongoClient(url);

//     const db = await client.db('Auth');

//     const collection = await db.collection('users');


//     var result = await collection.find().toArray();

//     res.json(result);
// };



import mongoose from "mongoose";

import { Request, Response } from "express";

const userSchema = new mongoose.Schema(
    {
        "username": { type: String },
        "email": { type: String },
        "password": { type: String }
    }
);


export const getusers = async (req: Request, res: Response) => {
    try {
        const userModel = mongoose.model("users", userSchema);

        var result = await userModel.find();

        res.send(result);

        console.log(result);
    } catch (error) {
        console.log(error);
    }
}