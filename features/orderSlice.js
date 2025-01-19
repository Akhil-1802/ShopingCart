import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    orders : []
}


export const OrderSlice = createSlice({
    name:'orders',
    initialState,
    reducers:{
        addOrder : (state , action)=>{
            const id= nanoid()
            const orderwithId = {...action.payload,id:id}
            state.orders.push(orderwithId)
        },
        cancelOrder : (state ,action)=>{
            state.orders = state.orders.filter(order => order.id !== action.payload.id)
        }
    }
})

export const {addOrder , cancelOrder} = OrderSlice.actions

export default OrderSlice.reducer