import React, { Children, useEffect, useState } from "react";
import SubscriptionContext from "./SubscriptionContext";

const SubscriptionContextProvider=({children})=>{

const [addSubscription,setAddSubscription]=useState(()=>{
    const saved=localStorage.getItem('subscription');
    return saved?JSON.parse(saved):[];
});

useEffect(()=>{
 localStorage.setItem('subscription',JSON.stringify(addSubscription));
},[addSubscription]);

const AddSubscription=(updater)=>{
    setAddSubscription((prev)=>{
        if (typeof updater==='function'){
          return updater(prev);
}
 return  [...prev,{id:Date.now(),...updater}]
})
}

const DeleteSubscription=(id)=>{
    setAddSubscription((prev)=>prev.filter((subscriber)=>subscriber.id!==id))
}

const updateSubscription=(id,newData)=>{
    setAddSubscription((prev)=>prev.map((subsc)=>
    subsc.id===id?{...subsc,...newData}:subsc));
}

    return(
        <SubscriptionContext.Provider value={{addSubscription,setAddSubscription,AddSubscription,DeleteSubscription,updateSubscription}}>
      {children}
        </SubscriptionContext.Provider>
    )
}

export default SubscriptionContextProvider