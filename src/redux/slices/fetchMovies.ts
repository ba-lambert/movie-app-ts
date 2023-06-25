import axios  from 'axios';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMovies = async ()=>{
    const {data} = await axios.get('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',{
        headers:{
            Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzJlMzc2ZWM3ZTI4NDdlNGVjNmY5ODY5Yzk0MTQ2NyIsInN1YiI6IjY0OTc2OWE1NjJmMzM1MDE0NjI4OTQyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZiRDMsJj2t0VFgOMCJ001z9JBihvWpLpEO2AIAtiEtA'
        }
    })
    return data;
}
interface InitialState{
    movies:any[];
    isLoading:boolean;
    error: any | null;
}

const initialState: InitialState = {
    movies:[],
    isLoading:false,
    error:null,
}

export const getMoviesSlice = createAsyncThunk("/getMovies", async ()=>{
    try{
        const res =await fetchMovies();
        return res
    }catch(error:any){
        return error.message;
    }
})
export default getMoviesSlice.reducer;