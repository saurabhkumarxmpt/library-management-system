const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    username:String,
    password:String
});

const model=mongoose.model('user',userSchema);

module.exports=model;
