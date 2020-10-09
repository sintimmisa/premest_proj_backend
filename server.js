const express =require('express');
require('dotenv').config()//For loading environment variable
const connectDB =require('./database/config');

const app=express();

const PORT=process.env.PORT;


//Datebase connection
connectDB();





app.get('/', (req,res)=>{
    res.send("Hi PreMest");
});


app.listen(PORT, console.log(`Server Runing at PORT:${PORT}`));
