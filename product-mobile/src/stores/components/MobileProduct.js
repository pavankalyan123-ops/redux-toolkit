import React from 'react';
import { mobileData } from '../data/mobiles';
import { Button } from 'antd';
import './mobiles.css';
import { useDispatch } from 'react-redux';
import { addToCart,deleteFromCart } from '../redux/CartReducer';

const MobileProduct = () => {
    const dispatch=useDispatch();
  return (
    <div>
       <h3>Mobiles List:</h3>
       <div className='mobile-list'>
          {mobileData.map(mobile=>(
            <div key={mobile.id}>
                <img src={mobile.image} />
                <h3>{mobile.company} {mobile.model}| {mobile.price}</h3>
                <Button type='primary' onClick={()=>
                    {
                        dispatch(addToCart({productName:mobile.company,productPrice:mobile.price}))
                    }}>Add</Button>
                <Button type='primary' danger onClick={()=>{
                    dispatch(deleteFromCart({productName:mobile.company}))
                }}>Remove</Button>
            </div>
          ))}
       </div>
    </div>
  )
}

export default MobileProduct