
'use client'
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';

interface State { 
    currentUser: null | object ,
    currentPage:"main" | "search" | "liked"
    modal : "close" | "open",
    socket :"on" | "off",
    mySongs: object,
    navigation:string[],
    currentSong:object | null,
    likedSongs:object | null,
    allSongs:object | null
}

const initialState : State = {
    currentUser:null,
    modal:"close",
    socket:"on",
    currentPage:"main",
    mySongs:[],
    navigation:[],
    currentSong:null,
    likedSongs:[],
    allSongs:[]

};






export const userSlice = createSlice({
    name: 'nust',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        
        setCurrentUser:(state,action) => {
            state.currentUser = action.payload;
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

export const { setCurrentUser} = userSlice.actions;
export default userSlice.reducer;