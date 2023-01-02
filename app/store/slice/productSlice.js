import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import statuses from "../../../utils/statuses";

const initialState = {
  data: [],
  status: statuses.SUCCESS,
};

const productSlice = createSlice({
  // 1 slice name,
  name: "product",
  // 2 initialState,
  initialState,
  // 3 reducers:{add(), remove()}
  reducers: {
    setProducts(state, action){
        state.data = action.payload
    },
    setStatus(state, action){
        state.status = action.payload
    }
  }
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// Thunk
export function fetchProducts(){
    return async function fetchProductsThunk(dispatch, getState){
        dispatch(setStatus(statuses.LOADING))

        try {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            dispatch(setProducts(data))
            dispatch(setStatus(statuses.SUCCESS))
        } catch (error) {
            console.error(error)
            dispatch(setStatus(statuses.ERROR))
        }
    }
}
