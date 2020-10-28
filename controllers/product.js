const Product =require('../models/Product');


exports.addProductController= async (req,res)=>{
    
console.log('req.body:',req.body);
console.log('req.file:',req.file);
console.log('req.user:',req.user);
 
const {filename}=req.file;
const {prodTitle,prodDesc,prodPrice,prodInstock} =req.body;

try{
  let product =new Product();
  product.prodImg=filename;
  product.prodTitle=prodTitle;
  product.prodDesc=prodDesc;
  product.prodPrice=prodPrice;
  product.prodInstock=prodInstock;

  //save to Db
  await product.save();
  //send response(succes/error msg) back to client
  res.json({
    successMessage:`${prodTitle} product was  successfully created`,
    product
  })
}catch(err){
  console.log(err, "addProductController error");
  res.status(500).json({
    errorMessage: `Internal Server Error, Please try again later`
  })
}
};

exports.getAllProductController = (req,res)=>{
  Product.find()
  .exec((err,products)=>{
    if(err){
      return res.status(400).json({

        errorMessage:"Failed"
      })
    }else{
      return res.status(200).json({
        successMessage:"Success",
        products
      })
    }

  })
}