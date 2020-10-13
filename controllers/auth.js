const express =require('express');
const authRouter =express.Router();

authRouter.post('/register',(req,res)=>{
    console.log("inside register controller")
})


module.exports= authRouter;