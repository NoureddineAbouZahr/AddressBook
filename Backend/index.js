require("dotenv").config();
const express = require('express');
const mongoose=require('mongoose');


const userRouter=require('./src/user/routes');
const ContactRouter=require('./src/contact/routes');

const DB_CONNECT =process.env.DB_CONNECT || "";
mongoose.connect(
    DB_CONNECT,
    ()=>console.log('connected')
);
const app=express();
app.use(express.json());

app.use('/api/users',userRouter);
app.use('/api/contacts',ContactRouter);

app.listen(3000,()=>console.log('Server is running'));
