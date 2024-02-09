import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cartDetails:[],
    totalPrice:0,
}

const CartReducer=createSlice({
    name:'mobile products',
    initialState:initialState,
    reducers:{
        addToCart:(state,action)=>{
            state.cartDetails.push(action.payload);
             let priceArray=state.cartDetails.map(obj=>+obj.productPrice);
             state.totalPrice=priceArray.reduce((a,b)=>a+b);
        },
        deleteFromCart:(state,action)=>{
            let index=state.cartDetails.findIndex(obj=>obj.productName===action.payload.productName);
            console.log(action.payload.productName)
            if(index>-1)
            {
                state.cartDetails.splice(index,1);
                let priceArray=state.cartDetails.map(obj=>+obj.productPrice);
             state.totalPrice=priceArray.reduce((a,b)=>a+b);
            }else{
                alert("This Product has not been added in your cart")
            }
            console.log(index);
            console.log(state.cartDetails)
            

        }
    }
})

export const{addToCart,deleteFromCart}=CartReducer.actions;
export default CartReducer.reducer;