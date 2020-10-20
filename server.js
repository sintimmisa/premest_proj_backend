const express =require('express');
const cors =require('cors');
const logger=require('morgan');
const cookieParser=require('cookie-parser');

require('dotenv').config()//For loading environment variable
const connectDB =require('./config/db');//for connecting Db
const authRouter=require('./routes/api/auth');
const categoryRouter=require('./routes/api/category');
const productRoutes=require('./routes/api/product');
const app=express();

const PORT=process.env.PORT;

/**
 * middlewares(methods/functions/operations that are called BETWEEN processing a Request 
 * and sending a Response )
 * @cors() to handle http request from different origin(domain,protocol,port)
 * @Morgan to handle request logging
 * @bodyparser { currently express.json in v4.16^} parse incoming request as json obj
 * @cookie-parser
 */
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());

//routes
app.use('/api/auth', authRouter);
app.use('/api/category', categoryRouter);
app.use('/api/product',productRoutes);




//Datebase connection
connectDB();





app.get('/', (req,res)=>{
    res.send("Hi PreMest");
});


app.listen(PORT, ()=> console.log(`Server Runing at PORT:${PORT}`));
