import { createSlice } from "@reduxjs/toolkit";

const movieSlice =createSlice({
    name:"movie",
    initialState:{
        nowPlayingmovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload
        }
    }
})

export const { addNowPlayingMovies} =movieSlice.actions;

export default movieSlice.reducer;