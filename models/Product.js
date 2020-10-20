const mongoose =require('mongoose');



const productSchema= new mongoose.Schema({
    prodImg:{
        type:'String',
        required:true
    },
    prodTitle:{
        type:'String',
        required:true,
        trim:true,
        maxlength:60
    },
    prodDesc:{
        type:'String',
        trim:true
    },
    prodPrice:{
        type:Number,
        required:true
    },
    prodInstock:{
        type:Number,
        required:true
    }

}, {timestamps:true});

const Product=mongoose.model('Product',productSchema);

module.exports = Product;
