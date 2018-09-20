const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/db');
const bodyParser = require('body-parser');
const app = express();
const passport = require('passport');

//引入users的API
const users = require("./routes/api/users");
const dbURI = db.mongoURI;

mongoose.connect(dbURI)
    .then(()=>{
        console.log('链接成功');
    }).catch((err)=>{
        console.log(err);
    })

app.get('/',(req,res)=>{
    res.send('Hellow World2');
});

//注册 body-parser参数解析
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//注册初始化passport
app.use(passport.initialize());
require('./config/passport')(passport);

// 注册路由接口
app.use("/api/users",users);
const port = process.env.PORT||5000;
app.listen(port,(res,req)=>{
    console.log(`server running http://localhost:${port}`);
});