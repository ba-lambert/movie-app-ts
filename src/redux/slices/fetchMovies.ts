import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import instance from '../../utils/axios';

export const fetchMovies = async ()=>{
    const {data} = await instance.get('/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc')
    return data;
}

type result = {
    id:number
    adult:boolean
    backdrop_path:string
    overview:string
    original_title:string
    original_language:string
    title:string
    vote_average:number
    vote_count:number
}

type movie = {
    page:number
    total_pages:number
    results:result[]
    total_results:number
}

type InitialState = {
    isLoading:boolean
    movies:movie
    error:string
}

const initialState:InitialState = {
    isLoading:false,
    movies:{
        page:0,
        total_pages:0,
        results:[],
        total_results:0
    },
    error:''
}

export const getMoviesSliceThunk = createAsyncThunk("/getMovies", async ()=>{
    try{
        const res =await fetchMovies();
        return res
    }catch(error:any){
        return error.message;
    }
})

export const getMoviesSlice = createSlice({
    name:"movies",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder
            .addCase(getMoviesSliceThunk.pending, (state)=>{
                state.isLoading = true;
            })
            .addCase(getMoviesSliceThunk.fulfilled,(state,actions:PayloadAction<movie>)=>{
                state.isLoading = false;
                state.movies = actions.payload;
            })
            .addCase(getMoviesSliceThunk.rejected,(state,action)=>{
                state.isLoading = false;
                state.movies = {
                    page: 0,
                    total_pages: 0,
                    results: [],
                    total_results: 0
                };
                state.error = action.error.message || 'something went wrong';
            })
    }
})
export default getMoviesSlice.reducer;