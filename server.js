//always on the top
import 'express-async-errors'

import express from 'express'

//FOR REQUEST STATUS LOGS
import morgan from 'morgan';

//MONGOOSE
import mongoose from 'mongoose';

//to parse cookie coming from frontend
import cookieParser from 'cookie-parser';

//Express validator
import { body, validationResult } from 'express-validator'

//FOR ACCESSING ENV VARIABLES
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();

//router
import jobRouter from './routes/jobRouter.js'
import authRouter from './routes/authRouter.js'
import userRouter from './routes/userRouter.js'

import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
import {authenticateUser} from './middleware/authMiddleware.js';


//NODE_ENV ENV VARIABLE FOR DEVELOPMENT OR PRODUCTION
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

//For parsing COokies
app.use(cookieParser());
//FOR PARSING JSON TO STRING
app.use(express.json());

app.use('/api/v1/jobs',authenticateUser, jobRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', authenticateUser, userRouter);
// app.get('/api/v1/test', (req,res) => {
//     console.log('testing');
//     res.json({msg : "test"});
// })
//Not found route
app.use('*', (req,res)=>{
    res.status(404).json({msg: 'not found'});
});
//middleware
app.use(errorHandlerMiddleware);

//Error in the route
app.use((err,req,res,next) => {
    console.log(err);
    res.status(500).json({msg: 'something went wrong'})
})

// LISTENING TO SERVER
const port = process.env.PORT || 5100

try{
    await mongoose.connect(process.env.MONGO_URL)
    app.listen(port, ()=> {
        console.log(`server running on port ${port}...`);
    });
    
    
}catch(error){
    console.log(error);
    process.exit(1);
    
}
