 import { createSlice } from "@reduxjs/toolkit";

 const initialState = {
     items: [],
    status: null
 }

 const drugsSlice = createSlice({
    name: "drugs",
     initialState,
    reducers: {}
})

export default drugsSlice.reducer;
