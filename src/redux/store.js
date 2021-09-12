import { configureStore } from '@reduxjs/toolkit';
import productSlice from './reducer';

const store = configureStore({
    reducer: {
        products: productSlice
    },
})

export default store