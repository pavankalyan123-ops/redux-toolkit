import React from 'react';
import {Button} from 'antd';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const cartDetails=useSelector(state=>state.cart.cartDetails);
    const totalPrice=useSelector(state=>state.cart.totalPrice)
    
  return (
    <div>
        <div style={{display:"flex",justifyContent:"center",width:"100%",
        alignItems:"center",gap:"20px",backgroundColor:"black",height:"100px"}}>
             <Button type='primary'>Cart Items:{cartDetails.length} </Button>
             <Button type='primary'>Total Price: {totalPrice}</Button>
        </div>
        {JSON.stringify(cartDetails)}
    </div>
  )
}

export default Navbar