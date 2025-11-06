import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getCartData } from '../../redux/CartData/CartDataReducers'

function Header() {
const DataPresentInCart=useSelector((state)=>state.getCartData)

console.log(DataPresentInCart);

  return (
    <div>Header</div>

  )
}

export default Header