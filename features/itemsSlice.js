import { createSlice,nanoid } from "@reduxjs/toolkit";


const initialState = {
    items : []
}


export const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers:{
        addItems:(state , action) =>{
            const itemWithId = {
                ...action.payload,  // Spread the properties of the item
                id: nanoid()        // Add a unique id to the item
            };
        
            // Push the item with id to the state array
            state.items.push(itemWithId);
        },                                     
        removeItems : (state ,action)=>{
            state.items = state.items.filter(item => item.id !== action.payload) 
        },
        setQuantity: (state, action) => {
            state.items = state.items.map(item => 
              item.id === action.payload.id 
                ? { ...item, quantity: action.payload.quantity } // Update quantity if ids match
                : item // Keep the item unchanged if ids don't match
            );
          },
          removeAllitems : (state,action)=>{
            state.items = []
          }
          
    }
})

export const { addItems, removeItems,setQuantity,removeAllitems} = itemsSlice.actions

export default itemsSlice.reducer