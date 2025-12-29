const express=require('express');
const app=express();
require('dotenv').config();
const connectDB=require('./utils/db');
const contactRouter=require('./routers/contact-routers');
const bookingRoute=require('./routers/booking-routers');
const callBookingRoute=require('./routers/callbooking-router');
const orderRoute=require('./routers/order-routers');
const SubscriberRoute=require('./routers/subscription-router');
const cors=require('cors');
const authRouter=require('./routers/auth-routers');
const errorMiddlewares=require('./middlewares/error-middleware')
const corsData={
    origin:"http://localhost:5173",
    methods:'GET,POST,PUT,DELETE,PATCH,PUT,HEAD',
    credentials:true,
}


app.use(cors(corsData));

app.use(express.json());


app.use('/api/auth',authRouter);
app.use('/api/form', contactRouter);
app.use('/api/book',bookingRoute);
app.use('/api/cart',orderRoute);
app.use('/api/bookcall',callBookingRoute);
app.use('/api/subscription',SubscriberRoute);

app.use(errorMiddlewares)

const PORT = 5000;
connectDB().then(()=>{
    app.listen(PORT,()=>{
    console.log(`Server Listenning at port: ${PORT}`);
    }) 
});
