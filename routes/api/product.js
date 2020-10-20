const { Router } = require('express');
const express =require('express');
const router =express.Router();
const {addProductController} =require('../../controllers/product');
const {authenticateJWT}=require('../../middlewares/authentication');
const upload =require('../../middlewares/multer');


router.post('/',authenticateJWT,upload.single('prodImg'),addProductController);

module.exports=router;