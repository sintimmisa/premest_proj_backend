const express =require('express');
const categoryRouter =express.Router();
const {addCategoryController} =require('../../controllers/category');
const {authenticateJWT}=require('../../middlewares/authentication');


categoryRouter.post('/',authenticateJWT,addCategoryController);

module.exports=categoryRouter;


