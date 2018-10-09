const express=require("express");
const router=express.Router();

const Cliente=require('../models/cliente');

router.get('/',async (req,res)=>{
    const clientes=await Cliente.find();
    console.log(clientes);
    res.json(clientes);
    /* Cliente.find(function (err,clientes){
       console.log(clientes);
   });*/
   /*
    res.json({
        status:'API works!'
    });*/
    //res.send("Helo Mundo");
});
router.post('/', async(req,res)=>{
    const {firstName,lastName}=req.body;
    const client=new Cliente({
        firstName,lastName
    })
    await client.save()
   // console.log(client);
    res.json({status:'tarea guardada'});
});
//router.put
//router delete
module.exports=router;