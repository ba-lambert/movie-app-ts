import { configureStore } from "@reduxjs/toolkit";
import getMoviesSlice from './slices/fetchMovies';

export const store =configureStore({
    reducer:{
        movies:getMoviesSlice,
    }
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;