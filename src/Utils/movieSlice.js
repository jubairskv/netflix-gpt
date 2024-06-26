import { createSlice } from "@reduxjs/toolkit";

const movieSlice =createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload
        },
        addTailerVideo:(state,action)=>{
            state.trailerVideo = action.payload

        }
    }
})

export const { addNowPlayingMovies,addTailerVideo} =movieSlice.actions;

export default movieSlice.reducer;