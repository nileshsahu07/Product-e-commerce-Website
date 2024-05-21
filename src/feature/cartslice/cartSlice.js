import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
  whishlist:[],
}

export const cartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
        addToCart: (state,action)=>{
          const { id } = action.payload
          let find = state.cart.findIndex((data)=>  data.id === id)
      
          if (find !== -1) {
           state.cart[find] = {
             ...state.cart[find],
             quantity: state.cart[find].quantity + 1
           };
         } else {
           state.cart.push({ ...action.payload, quantity: 1 });
         }
        },
        addToWhishlist:(state,action)=>{
          state.whishlist.push(action.payload)
        },

        removeItem:(state,action)=>{
          state.cart = state.cart.filter((value)=>{
            return value.id !== action.payload.id
          })
        },

        removewishItem:(state,action)=>{
          state.whishlist = state.whishlist.filter((myValue)=>{
            return myValue.id !== action.payload.id
          })
        },

        removeAllItem:(state)=>{
          state.cart = []
        },

        incrementItem:(state,action)=>{
          state.cart = state.cart.map((item)=>{
            if(item.id === action.payload.id){
                return{...item,quantity: item.quantity + 1}
            }
        })
        },

        decrementItem:(state,action)=>{
          state.cart = state.cart.map((items)=>{
            if(items.id===action.payload.id){
                return{...items,quantity:items.quantity - 1}
            }
          })
        }
  },
})


export const {addToCart,addToWhishlist,removeItem,removeAllItem,removewishItem,incrementItem,decrementItem} = cartSlice.actions

export default cartSlice.reducer