import { createSlice } from "@reduxjs/toolkit";
const fetchStatusSlice = createSlice({
    name:'fetchStatus',
    initialState: {
        fetchDone: false,
        currentlyFetching:false,
    },
    reducers:{
        markFetchDone: (state) => {
            state.fetchDone = true; // Mutate the draft state
        },
        markFetchingStarted: (state) => {
            state.currentlyFetching = true; // Mutate the draft state
        },
        markFetchingFinished: (state) => {
            state.currentlyFetching = false; // Mutate the draft state
        }
    }
});
export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;
