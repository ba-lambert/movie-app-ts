import {useEffect} from 'react'
import { useSelector,useDispatch } from "react-redux";
import { getMoviesSliceThunk } from "../redux/slices/fetchMovies";
import { useAppDispatch,useAppSelector } from '../app/hooks';

export const useFetchProducts = () =>{
    const dispatch = useAppDispatch();
    const movies = useAppSelector((state)=>state)
    useEffect(()=>{
        dispatch(getMoviesSliceThunk() as any);
    },[dispatch]);
    return movies;
}