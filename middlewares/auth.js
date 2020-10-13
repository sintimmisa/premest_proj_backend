const {check, validationResult} =require('express-validator');


/**
 * Middleware to validate User registration
 * check Username
 * check email
 * check password */

exports.validator=[
    //username
    check('username')
        .not().isEmpty().trim()
        .withMessage("All fields are required!"),

    //email
    check('email')
    .isEmail().normalizeEmail()
    .withMessage('Invalid email!'),

    //password
    check('password')
    .isLength({min:6})
    .withMessage('Password must be at least 6 characters!'),


]
/**
 * Middleware function to return validation results
 * @param {validationResult} req 
 * @param {return status(400) if hasErrors} res 
 * @param {*} next 
 */

exports.validationResult=(req,res,next)=>{

    const result =validationResult(req);
    const hasErrors=!result.isEmpty();

     if(hasErrors){
         const err =result.array()[0].msg;

         console.log("Error: ", hasErrors);
         console.log("Results: ", result)
         return res.status(400).json({
             errMsg:err,
             
         });
         
     }

    next()
}