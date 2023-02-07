import { createSlice } from "@reduxjs/toolkit";

const indicatorSlice = createSlice({
    name: 'indicators',
    initialState: {
        pepeto: 10
    },
    reducers: {}
});

export default indicatorSlice.reducer;