const express=require('express');
const router=express.Router();
const {getAllUsers,getUserById,updateUserById,deleteUserById,getContactById,updateContactById,deleteContactById, getAllContacts,getAllTickets,getTicketById,deleteTicketById,updateticketById, getAllCallBookings, updateCallBookingsById, deleteCallBookingsById, getCallBookingsById, getAllOrders, getOrdersById, updateOrdersById, deleteOrdersById, getAllSubscriptions, getSubscriptionsById, updateSubscriptionsById, deleteSubscriptionsById}=require('../controllers/admin-controller')
const authMiddleware=require('../middlewares/auth-middleware');
const adminMiddleware=require('../middlewares/admin-middleware');

router.route('/users').get(authMiddleware,adminMiddleware,getAllUsers);
router.route('/users/:id').get(authMiddleware,adminMiddleware,getUserById);
router.route('/users/update/:id').patch(authMiddleware,adminMiddleware,updateUserById);
router.route('/users/delete/:id').delete(authMiddleware,adminMiddleware,deleteUserById);

router.route('/contacts').get(authMiddleware,adminMiddleware,getAllContacts);
router.route('/contacts/:id').get(authMiddleware,adminMiddleware,getContactById);
router.route('/contacts/update/:id').patch(authMiddleware,adminMiddleware,updateContactById);
router.route('/contacts/delete/:id').delete(authMiddleware,adminMiddleware,deleteContactById);

router.route('/tickets').get(authMiddleware,adminMiddleware,getAllTickets);
router.route('/tickets/:id').get(authMiddleware,adminMiddleware,getTicketById);
router.route('/tickets/update/:id').patch(authMiddleware,adminMiddleware,updateticketById);
router.route('/tickets/delete/:id').delete(authMiddleware,adminMiddleware,deleteTicketById);

router.route('/callbookings').get(authMiddleware,adminMiddleware,getAllCallBookings);
router.route('/callbookings/:id').get(authMiddleware,adminMiddleware,getCallBookingsById);
router.route('/callbookings/update/:id').patch(authMiddleware,adminMiddleware,updateCallBookingsById);
router.route('/callbookings/delete/:id').delete(authMiddleware,adminMiddleware,deleteCallBookingsById);

router.route('/orders').get(authMiddleware,adminMiddleware,getAllOrders);
router.route('/orders/:id').get(authMiddleware,adminMiddleware,getOrdersById);
router.route('/orders/update/:id').patch(authMiddleware,adminMiddleware,updateOrdersById);
router.route('/orders/delete/:id').delete(authMiddleware,adminMiddleware,deleteOrdersById);

router.route('/subscriptions').get(authMiddleware,adminMiddleware,getAllSubscriptions);
router.route('/subscriptions/:id').get(authMiddleware,adminMiddleware,getSubscriptionsById);
router.route('/subscriptions/update/:id').patch(authMiddleware,adminMiddleware,updateSubscriptionsById);
router.route('/subscriptions/delete/:id').delete(authMiddleware,adminMiddleware,deleteSubscriptionsById);

module.exports=router;
