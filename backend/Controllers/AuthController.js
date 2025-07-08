const express=require('express');
const bcrypt = require('bcrypt');
const router=express.Router();
const User=require('../schema/user');

router.login=async(req,res)=>{
    const {username,password}=req.body;
    try{
        const user=await User.findOne({username});
        if(!user) return res.status(400).json({message:'user not found'});

        const isMatched=await bcrypt.compare(password,user.password);
        if(!isMatched) return res.status(400).json({message:'password is not match'});
        
        res.json(user);
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

module.exports=router;