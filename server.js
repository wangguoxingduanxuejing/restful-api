const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/db');
const app = express();

const dbURI = db.mongoURI;

mongoose.connect(dbURI)
    .then(()=>{
        console.log('链接成功');
    }).catch((err)=>{
        console.log(err);
    })

app.get('/',(res,req)=>{
    req.send('Hellow World2');
});

const port = process.env.PORT||5000;
app.listen(port,(res,req)=>{
    console.log(`server running http://localhost:${port}`);
});