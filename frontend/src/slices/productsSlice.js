import { createSlice } from "@reduxjs/toolkit";


const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        loading: false,
        error: null,
        productsCount: 0,
        resPerPage: 3    },
    reducers: {
        productsRequest(state, action){
            return {
                loading: true
            }
        },
        productsSuccess(state, action){
            return {
                loading: false,
                products: action.payload.products,
                productsCount:action.payload.count,
                resPerPage:action.payload.resPerPage
            }
        },
        productsFail(state, action){
            return {
                loading: false,
                error:  action.payload
            }
        },
        productsCatageoryRequest(state, action){
            return {
                loading: true
            }
        },
        productsCatageorySuccess(state, action){
            return {
                loading: false,
                products: action.payload.products,
                productsCount:action.payload.count,
                resPerPage:action.payload.resPerPage
            }
        },
        productsCatageoryFail(state, action){
            return {
                loading: false,
                error:  action.payload
            }
        }
    }
});

const { actions, reducer } = productsSlice;

export const { 
    productsRequest, 
    productsSuccess, 
    productsFail,
    productsCatageoryFail,
    productsCatageoryRequest,
    productsCatageorySuccess

} = actions;

export default reducer;