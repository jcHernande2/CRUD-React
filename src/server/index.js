const express=require('express');
const morgan =require('morgan');
const path=require('path');
const {mongoose}=require('../database');

const app=express();
//setings
app.set('port',process.env.PORT||3000);
//Middlewares
app.use(morgan('dev'));
app.use(express.json());
//Routes
app.use('/api/cliente',require("../routes/app.routes"));
//static files
console.log(path.join(__dirname,'../../public'));
app.use(express.static(path.join(__dirname,'../../public')));
//starting server
app.listen(app.get('port'),()=>{
    console.log("server port 3000");
});