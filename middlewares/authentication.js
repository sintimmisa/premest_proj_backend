const jwt=require('jsonwebtoken');
const {jwtSecret}=require('../config/keys');

exports.authenticateJWT =(req,res,next)=>{
    //get access to token 
    const token = req.cookies.token;
    console.log(token);
   next();
}

