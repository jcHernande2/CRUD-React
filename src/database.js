const mongoose=require('mongoose');
const URI='mongodb://localhost/Clientes';
mongoose.connect(URI).then(db=>console.log('db uios connect'))
.catch(err=>console.error(err));
module.exports=mongoose;