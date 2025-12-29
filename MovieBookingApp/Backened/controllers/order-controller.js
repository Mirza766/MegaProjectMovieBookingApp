const {Order}=require('../models/order-model');


const OrderUser=async(req,res)=>{
try {
        const {name,email,userId, items } = req.body;
        if (!items || items.length===0  || !Array.isArray(items)) {
            return res.status(400).json({ message: "No Items Selected to proceed" });
        }
        const subtotal = items.reduce((sum, i) => sum + (i.price * i.quantity), 0);
        const discount = items.reduce((sum, i) => i.quantity >= 3 ? sum + (i.price * i.quantity * 0.1) : sum, 0);
        const tax = (subtotal - discount) * 0.02;
        const finalTotal = subtotal - discount + tax;

        const newOrder = new Order({
            userId,
            name,
            email,
            items,
            subtotal,
            discount,
            tax,
            finalTotal
        });

        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        res.status(500).json({ message: "Error saving order", error });
    }
}

module.exports=OrderUser;