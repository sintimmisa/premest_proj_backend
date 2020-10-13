const express =require('express');
const authRouter =express.Router();
const {registerValidator,loginValidator,validationResult} =require('../../middlewares/validation');
const {registerController,loginController} =require('../../controllers/auth');


authRouter.post('/register', registerValidator,validationResult, registerController);
authRouter.post('/login', loginValidator,validationResult, loginController);



module.exports= authRouter;