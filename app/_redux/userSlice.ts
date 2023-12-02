
'use client'
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';

interface State { 
    currentType:"student"|"faculty"|"admin",
    currentPage:"home" | "result" | "attendance"

}
const initialState : State = {
    currentType:"student",
    currentPage:"home"

};

export const userSlice = createSlice({
    name: 'nust',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        
        setCurrentPage:(state,action) => {
            state.currentPage = action.payload;
        }
        
        
    },
    extraReducers: (builder) => {
        // builder
           
            // .addCase(likeSongAsync.pending, (state) => {
                
            // })
            // .addCase(likeSongAsync.fulfilled, (state, action) => {
                
            // })
            // .addCase(getlikeSongAsync.pending, (state) => {
                
            // })
            // .addCase(getlikeSongAsync.fulfilled, (state, action) => {
            //     if(action.payload==="InternalServerError" || action.payload ==="Not Found"){}
            //     else {
            //         state.likedSongs = action.payload;
            //     }
            // })
            // .addCase(AllSongAsync.pending, (state) => {
                
            // })
            // .addCase(AllSongAsync.fulfilled, (state, action) => {
            //     if(action.payload==="InternalServerError" || action.payload ==="Not Found"){}
            //     else {
            //         state.allSongs = action.payload;
            //     }
            // })
            
    },
    


});

export const { setCurrentPage} = userSlice.actions;
export default userSlice.reducer;