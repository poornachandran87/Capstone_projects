import { configureStore,combineReducers } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'
import productsReducer from './slices/productsSlice'
import productReducer from './slices/productSlice'
import authReducer from './slices/authSlice'
import cartReducer from './slices/cartSlice'
import orderReducer from './slices/orderSlice'

const reducer = combineReducers({
  productsState:productsReducer,
  productState:productReducer,
  authState:authReducer,
  cartState:cartReducer,
  orderState:orderReducer
})

const store = configureStore({
    reducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk
    })
})

export default store;