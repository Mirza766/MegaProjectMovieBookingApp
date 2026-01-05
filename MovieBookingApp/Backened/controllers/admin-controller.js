
const {User}=require('../models/user-model');
const {Contact}=require('../models/contact-model');
const {Booking}=require('../models/booking-model');
const {CallBooking}=require('../models/callbooking-model');
const {Order}=require('../models/order-model')
const {Subscription}=require('../models/subscription-model');
const getAllUsers=async(req,res)=>{
try{
const users=await User.find({},{password:0});
res.status(200).json({users});

if(!users || users.length===0){
    return res.status(404).json({message:"No Users Found"});
}
}

catch(error){
next(error);
}
}


const getUserById=async(req,res)=>{
 try{
    const id=req.params.id;
    const data=await User.findOne({_id:id},{password:0});
    return res.status(200).json(data);
  }
  catch(error){
    next(error);
  }
}
const updateUserById=async(req,res)=>{
    try{

  const id=req.params.id;
  const updatedUserData=req.body;

  const updateUser=await User.updateOne(
    {_id:id},
    {
        $set:updatedUserData
    }
  );

  return res.status(200).json(updateUser);

    }
    catch(error){
        next(error);
    }
}

const deleteUserById=async(req,res)=>{
  try{
    const id=req.params.id;
    await User.deleteOne({_id:id});
    return res.status(200).json({message:"User Deleted Successfully"});
  }
  catch(error){
    next(error);
  }
}


// Contacts Controllers

const getAllContacts=async(req,res)=>{
    try{
const contacts=await Contact.find();
res.status(200).json(contacts);

if(!contacts || contacts.length===0){
    return res.status(404).json({message:"No Contact Found"});
}
    }
    catch(error){
        next(error);
    }
}

const getContactById=async(req,res)=>{
 try{
    const id=req.params.id;
    const data=await Contact.findOne({_id:id},{password:0});
    return res.status(200).json(data);
  }
  catch(error){
    next(error);
  }
}



const updateContactById=async(req,res)=>{
    try{

  const id=req.params.id;
  const updatedContactData=req.body;

  const updateContact=await Contact.updateOne(
    {_id:id},
    {
        $set:updatedContactData
    }
  );

  return res.status(200).json(updateContact);

    }
    catch(error){
        next(error);
    }
}


const deleteContactById=async(req,res)=>{
  try{
    const id=req.params.id;
    await Contact.deleteOne({_id:id});
    return res.status(200).json({message:"Contact Deleted Successfully"});
  }
  catch(error){
    next(error);
  }
}

// Tickets
const getAllTickets=async(req,res)=>{
    try{
const bookings=await Booking.find();
res.status(200).json(bookings);

if(!bookings || bookings.length===0){
    return res.status(404).json({message:"No Booking Found"});
}
    }
    catch(error){
        next(error);
    }
}



const getTicketById=async(req,res)=>{
 try{
    const id=req.params.id;
    const data=await Booking.findOne({_id:id},{password:0});
    return res.status(200).json(data);
  }
  catch(error){
    next(error);
  }
}


const updateticketById=async(req,res)=>{
    try{

  const id=req.params.id;
  const updatedBookingData=req.body;

  const updateBooking=await Booking.updateOne(
    {_id:id},
    {
        $set:updatedBookingData
    }
  );

  return res.status(200).json(updateBooking);

    }
    catch(error){
        next(error);
    }
}


const deleteTicketById=async(req,res)=>{
  try{
    const id=req.params.id;
    await Booking.deleteOne({_id:id});
    return res.status(200).json({message:"Contact Deleted Successfully"});
  }
  catch(error){
    next(error);
  }
}


// Call Bookings
const getAllCallBookings=async(req,res)=>{
    try{
const bookings=await CallBooking.find();
res.status(200).json(bookings);

if(!bookings || bookings.length===0){
    return res.status(404).json({message:"No Booking Found"});
}
    }
    catch(error){
        next(error);
    }
}



const getCallBookingsById=async(req,res)=>{
 try{
    const id=req.params.id;
    const data=await CallBooking.findOne({_id:id},{password:0});
    return res.status(200).json(data);
  }
  catch(error){
    next(error);
  }
}


const updateCallBookingsById=async(req,res)=>{
    try{

  const id=req.params.id;
  const updatedBookingData=req.body;

  const updateBooking=await CallBooking.updateOne(
    {_id:id},
    {
        $set:updatedBookingData
    }
  );

  return res.status(200).json(updateBooking);

    }
    catch(error){
        next(error);
    }
}


const deleteCallBookingsById=async(req,res)=>{
  try{
    const id=req.params.id;
    await CallBooking.deleteOne({_id:id});
    return res.status(200).json({message:"Contact Deleted Successfully"});
  }
  catch(error){
    next(error);
  }
}



const getAllOrders=async(req,res)=>{
    try{
const orders=await Order.find();
res.status(200).json(orders);

if(!orders || orders.length===0){
    return res.status(404).json({message:"No Orders Found"});
}
    }
    catch(error){
        next(error);
    }
}



const getOrdersById=async(req,res)=>{
 try{
    const id=req.params.id;
    const data=await Order.findOne({_id:id},{password:0});
    return res.status(200).json(data);
  }
  catch(error){
    next(error);
  }
}


const updateOrdersById=async(req,res)=>{
    try{

  const id=req.params.id;
  const updatedOrderData=req.body;

  const updateOrder=await Order.updateOne(
    {_id:id},
    {
        $set:updatedOrderData
    }
  );

  return res.status(200).json(updateOrder);

    }
    catch(error){
        next(error);
    }
}


const deleteOrdersById=async(req,res)=>{
  try{
    const id=req.params.id;
    await Order.deleteOne({_id:id});
    return res.status(200).json({message:"Order Deleted Successfully"});
  }
  catch(error){
    next(error);
  }
}


const getAllSubscriptions=async(req,res)=>{
    try{
const orders=await Subscription.find();
res.status(200).json(orders);

if(!orders || orders.length===0){
    return res.status(404).json({message:"No Subscriptions Found"});
}
    }
    catch(error){
        next(error);
    }
}



const getSubscriptionsById=async(req,res)=>{
 try{
    const id=req.params.id;
    const data=await Subscription.findOne({_id:id},{password:0});
    return res.status(200).json(data);
  }
  catch(error){
    next(error);
  }
}


const updateSubscriptionsById=async(req,res)=>{
    try{

  const id=req.params.id;
  const updatedOrderData=req.body;

  const updateOrder=await Subscription.updateOne(
    {_id:id},
    {
        $set:updatedOrderData
    }
  );

  return res.status(200).json(updateOrder);

    }
    catch(error){
        next(error);
    }
}


const deleteSubscriptionsById=async(req,res)=>{
  try{
    const id=req.params.id;
    await Subscription.deleteOne({_id:id});
    return res.status(200).json({message:"Subscription Deleted Successfully"});
  }
  catch(error){
    next(error);
  }
}





module.exports={getAllUsers,getUserById,updateUserById,deleteUserById,getAllContacts,updateContactById,deleteContactById,getContactById,getAllTickets,getTicketById,updateticketById,deleteTicketById,deleteCallBookingsById,getAllCallBookings,updateCallBookingsById,getCallBookingsById,getAllOrders,getOrdersById,deleteOrdersById,updateOrdersById,getAllSubscriptions,getSubscriptionsById,deleteSubscriptionsById,updateSubscriptionsById}