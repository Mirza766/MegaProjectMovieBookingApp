import React, { useCallback, useContext } from 'react'
import SubscriptionContext from '../context/SubscriptionContext'
import "../stylingSheets/MovieCart.css";
import {Button, TableCell} from '@mui/material';
import { useDispatch } from 'react-redux';



const SubscriptionCard=React.memo(({subscription,onDelete})=>{
  console.log('Rendering Subscription Card',subscription.id )

  return(
     <tr className='headinsideCart'>
                <th className='thtags'>{subscription.id}</th>
                 <th className='thtags'>{subscription.name}</th>
                  <th className='thtags'>{subscription.email}</th>
                   <th className='thtags'>{subscription.phoneNumber}</th>
                    <th className='thtags'>{subscription.planName}</th>
                     <th className='thtags'>${subscription.price}</th>
                     <TableCell>
                       <Button className='Subscribe-btton'  variant='contained' color='error' size="small" onClick={()=>onDelete(subscription.id)} >Delete</Button>
                     </TableCell>
            </tr>
  )
})




function SubscriptionDataRetrieval() {

const {addSubscription,DeleteSubscription}=useContext(SubscriptionContext);
const deleteSubscriber=useCallback((id)=>DeleteSubscription(id),[DeleteSubscription]);


  return (
    <div className='CartItems-container'>
      <h2 className='cartData-head'>Subscriptions Data</h2>
      
        <div className='CartItems-master-cont'>
            <div className='CartItems-submaster-cont'>
     <table  className='tablecontainer subscrip'>
        <thead >
            <tr className='headofCart' >
                <th className='thtagshead'>User ID</th>
                <th  className='thtagshead'>Name</th>
                <th  className='thtagshead'>Email</th>
                <th  className='thtagshead'>Phone Number</th>
                <th  className='thtagshead'>Plan Name</th>
                <th  className='thtagshead'>Price</th>
                  <th  className='thtagshead'></th>
            </tr>
        </thead>
        <tbody>
            {
               addSubscription?.map((sub) => (
  <SubscriptionCard key={sub.id} subscription={sub} onDelete={deleteSubscriber} />
))
             
            }
          
        </tbody>
     </table>
   
  </div>
</div>
       
    </div>
  )
}

export default SubscriptionDataRetrieval