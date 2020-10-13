const PRODUCTION=false;

if(PRODUCTION){
    module.exports=require('./prod');
}else{
    module.exports=require('./dev');
}