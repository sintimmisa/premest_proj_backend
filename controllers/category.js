


/**
 * Category controller to return success msg after 3secs
 * @param {*} req 
 * @param {*} res 
 */
exports.addCategoryController=(req,res)=>{
    console.log("Inside category controller");

    setTimeout(() => {
         res.json({
        successMessage:`${req.body.category} category was successfully added`,
    })
    }, 3000);
   
}