import express from 'express';
import mongoose from 'mongoose';
const app = express();

mongoose.connect(
    `mongodb+srv://admin:123@cluster0.vtlyw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
)
.then(()=>
    app.listen(7000,()=>
        console.log("Connected to database and server is running")
    )
).catch((e)=> console.log(e));



