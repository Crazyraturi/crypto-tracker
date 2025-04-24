import { configureStore } from "@reduxjs/toolkit";
import cryptoReducer from "../features/crypto/cryptoSlice"

const Store = configureStore({
    reducer:{
        crypto:cryptoReducer

    }
})

export default Store;