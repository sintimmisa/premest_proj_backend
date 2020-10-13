const express =require('express');
const authRouter =express.Router();
const {validator,validationResult} =require('../middlewares/auth');


authRouter.post('/register', validator,validationResult)



module.exports= authRouter;