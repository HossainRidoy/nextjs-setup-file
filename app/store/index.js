import {configureStore} from '@reduxjs/toolkit'

// Reducher
import ProductReducher from './slice/productSlice'

const store = configureStore({
    reducer:{
        product:ProductReducher,
    }
})

export default store