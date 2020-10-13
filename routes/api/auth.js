const express =require('express');
const authRouter =express.Router();
const {validator,validationResult} =require('../../middlewares/auth');
const {registerController} =require('../../controllers/auth');


authRouter.post('/register', validator,validationResult, registerController);



module.exports= authRouter;