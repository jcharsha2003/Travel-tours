import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'

import cookieParser from 'cookie-parser'
import tourRoute from './routes/tours.js'
import userRoute from './routes/users.js'
import authRoute from './routes/auth.js'
import reviewRoute from './routes/reviews.js'
import bookingRoute from './routes/booking.js'
import foodRoute from "./routes/foods.js"
dotenv.config()
const app = express()
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
const port = process.env.PORT || 8000;
// const corsOptions ={
//     origin:'https://mysimple-tour-travel.netlify.app', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200,
//  }

//database connection
// mongoose.set("strictQuery",false);
const connect =  async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
          useNewUrlParser:true,
          useUnifiedTopology:true  
        });
        console.log('connected to db');
    } catch (err) {
        console.log('db connection failed')
    }
}

//middleware
app.use(express.json());

app.use(cookieParser());
app.use('/api/auth', authRoute );
app.use('/api/tours', tourRoute );
app.use('/api/users', userRoute );
app.use('/api/review', reviewRoute )
app.use('/api/booking', bookingRoute );
app.use('/api/foods', foodRoute )

app.listen(port , ()=>{
    connect();
    console.log(`Server is running on port ${port}`)
})