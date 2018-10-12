const express=require("express");
const router=express.Router();

const Cliente=require('../models/cliente');
//get
router.get('/',async (req,res)=>{
    const clientes=await Cliente.find();
    console.log(clientes);
    res.json(clientes);
});
router.get('/:id',async (req,res)=>{
    const clientes=await Cliente.findById(req.params.id);
    res.json(clientes);
});
//post
router.post('/', async(req,res)=>{
    const {firstName,lastName}=req.body;
    const client=new Cliente({
        firstName,lastName
    })
    await client.save()
   // console.log(client);
    res.json({status:'tarea guardada'});
});
//put
router.put('/:id', async(req,res)=>{
    const {firstName,lastName}=req.body;
    const newCliente={firstName,lastName};
    await Cliente.findByIdAndUpdate(req.params.id,newCliente);
    //console.log(clientes);
    res.json({status:"tarea actualizada"});
    //res.send('Got a PUT request at /user');
});
//delete
router.delete('/:id', async(req,res)=>{
    await Cliente.findByIdAndRemove(req.params.id);
    res.json({status:"tarea eliminada"});
});
//router delete
module.exports=router;