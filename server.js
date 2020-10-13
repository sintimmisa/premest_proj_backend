const express =require('express');
const cors =require('cors');
const logger=require('morgan');

require('dotenv').config()//For loading environment variable
const connectDB =require('./database/config');//for connecting Db
const authRouter=require('./controllers/auth');

const app=express();

const PORT=process.env.PORT;

/**
 * middlewares(methods/functions/operations that are called BETWEEN processing a Request 
 * and sending a Response )
 * @cors() to handle http request from different origin(domain,protocol,port)
 * @Morgan to handle request logging
 * @bodyparser { currently express.json in v4.16^} parse incoming request as json obj
 */
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use('/api/auth', authRouter)




//Datebase connection
connectDB();





app.get('/', (req,res)=>{
    res.send("Hi PreMest");
});


app.listen(PORT, ()=> console.log(`Server Runing at PORT:${PORT}`));
