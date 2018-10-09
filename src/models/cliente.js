const mongoose=require('mongoose');
const {Schema}=mongoose;

const ClienteSchema=new Schema({
    firstName:{type:String, require:true},
    lastName:{type:String,require:true}
});
module.exports=mongoose.model('Cliente',ClienteSchema);