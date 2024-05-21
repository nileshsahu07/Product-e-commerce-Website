import { configureStore } from '@reduxjs/toolkit'
import cartSlice from "../feature/cartslice/cartSlice"


export const Store = configureStore({
  reducer: {
    allCart:cartSlice,
    allFavorite:cartSlice
  },
})