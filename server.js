const express =require('express');
require('dotenv').config()

const app=express();

const PORT=process.env.PORT;




app.get('/', (req,res)=>{
    res.send("Hi PreMest");
});


app.listen(PORT, console.log(`Server Runing at PORT:${PORT}`));
