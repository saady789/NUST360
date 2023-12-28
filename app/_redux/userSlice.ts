
'use client'
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';

export interface State { 
    currentType:"student"|"faculty"|"admin",
    currentPage:string,
    currentUser?:any

}
const initialState : State = {
    currentType:"student",
    currentPage:"home",
    currentUser:null

};

export const userSlice = createSlice({
    name: 'nust',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        
        setCurrentPage:(state,action) => {
            state.currentPage = action.payload;
        },
        setCurrentType:(state,action) => {
            state.currentType = action.payload;
        },
        setCurrentUser:(state,action) => { 
            console.log(action); 
            if(action.payload){
                state.currentUser = action.payload;
            }
           
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

export const { setCurrentPage,setCurrentType,setCurrentUser} = userSlice.actions;
export default userSlice.reducer;