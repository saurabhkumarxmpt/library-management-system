require('dotenv').config();
const express=require('express');
const cors=require('cors');
const PORT=process.env.PORT;
const app=express();
const database=require('./config/database');
const auth=require('./routes/userRoutes');

app.use(express.json());
app.use(cors({
     origin: process.env.FRONTEND_URL,
        credentials: true 
}));
app.use('/login',auth);
database();
app.get("/",(req,res)=>{
    res.json({message:"this is the home page"});
});

app.listen(PORT,(err)=>{
        if(err){
            console.error(err.message);
        }else{
            console.info("server is run");
        }
});

