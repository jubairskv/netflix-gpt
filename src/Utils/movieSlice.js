import { createSlice } from "@reduxjs/toolkit";

const movieSlice =createSlice({
    name:"movie",
    initialState:{
        nowPlayingmovie:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingmovie = action.payload
        }
    }
})

export const { addNowPlayingMovies} =movieSlice.actions;

export default movieSlice.reducer;