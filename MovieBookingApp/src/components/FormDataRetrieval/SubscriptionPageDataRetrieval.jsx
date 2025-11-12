import React, { useContext } from 'react'
import SubscriptionContext from '../context/SubscriptionContext'
import "../stylingSheets/MovieCart.css";
import {Button, TableCell} from '@mui/material';



function SubscriptionDataRetrieval() {
const {addSubscription}=useContext(SubscriptionContext)



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
            </tr>
        </thead>
        <tbody>
            {
                addSubscription?.map((addSubscription)=>(
               <tr key={addSubscription.id} className='headinsideCart'>
                <th className='thtags'>{addSubscription.id}</th>
                 <th className='thtags'>{addSubscription.name}</th>
                  <th className='thtags'>{addSubscription.email}</th>
                   <th className='thtags'>{addSubscription.phoneNumber}</th>
                    <th className='thtags'>{addSubscription.planName}</th>
                     <th className='thtags'>${addSubscription.price}</th>
                     <TableCell>
                       <Button  variant='contained' color='error' size="small" onClick={()=>onDelete(user.id)} >Delete</Button>
                     </TableCell>
            </tr>
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