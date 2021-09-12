import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    empty: true, 
    cart: [],
    products: []
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setEmpty (state, action) {
            state.empty = action.payload
        },

        addItem (state, action) {
            state.cart.push(action.payload)
        },
        deleteItem (state, action) {
            state.cart.filter(item => {
                return item.title !== action.payload
            })
        },
        setProducts (state, action) {
            state.products = action.payload
        },
        resetCart (state, action) {
            state.cart = []
        },
        addProducts (state, action) {
            state.products.push(action.payload)
        },
        deleteProduct (state, action) {
            state.products.filter(product => {
                return product.title  !== action.payload
            })
        }
    }
})

export const { setEmpty, setProducts, addItem, deleteItem, resetCart, addProducts, deleteProduct} = productSlice.actions;

export const selectEmpty = (state) => state.products.empty;

export const selectCart = (state) => state.products.cart;

export const selectProducts = (state) => state.products.products;

export default productSlice.reducer;