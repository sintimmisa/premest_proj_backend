const User =require('../models/User');
const bcrypt =require('bcryptjs');
const jwt =require('jsonwebtoken');
const {jwtSecret,jwtExpire}=require('../config/keys');

/**
 * Register account Controller to handle logic and save to database
 * @param {*} req 
 * @param {*} res 
 */


exports.registerController = async(req,res)=>{

    const {username,email,password} =req.body;
    //console.log(req.body);

    try{
        //check if user email already exist
        //if true :errMsg
        const user= await User.findOne({email});
            if(user){
                return res.status(400).json({
                    errMsg:"Email Already exist"
                });
            }
        //else create new user account
        const newUser = new User();

        newUser.username=username;
        newUser.email=email;

        //use bcryptjs to has password
        // generate salt 
        const salt =await bcrypt.genSalt(10);
        //hash password
        newUser.password= await bcrypt.hash(password, salt);
       // console.log("New user password:", newUser.password)


       //save uer in Db
       await newUser.save();

       //fire back success msg
       res.json({
           successMessage:"Account sucessfully created. Please login"
       })

    }catch(err){
        console.log('registerController error: ',err);
        res.status(500).json({
            errorMessage:'Error at the server side!'
        })
    }

};


exports.loginController = async(req,res)=>{
    const {email,password}=req.body;

   console.log('Inside login controller');
   try{

    const user =await User.findOne({email});

    if (!user){

        return res.status(400).json({
            errorMessage:"Invid email or password",
        });
    }

/**
 * 
 */
    const isMatch = await bcrypt.compare(password,user.password);
    if (!isMatch){
        return res.status(400).json({
            errorMessage:"Invalide email or password",
        });
    }


    /**
     * Use jwtwebtoken to return token and user
     */
    const payLoad ={
        user:{
            _id:user._id,
        },
    }

    jwt.sign(payLoad,jwtSecret,{expiresIn: jwtExpire},(err,token)=>{
        if (err){
            console.log('jwt error : ',err);
        }
        const {_id,username,email,role}=user;

        //get response
        res.json({
            token,
            user:{_id,username,email,role}
        })
    })
   }catch(err){
       console.log('loginController error: ',err);
       res.status(5000).json({
           errorMessage:"Error at the Server side!"
       })
   }

};




