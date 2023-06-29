import React,{useState,useEffect} from 'react';
import instance from '../utils/axios';

type getItems = {
    title:string,
    url:string,
    styles:string
}

type movie = {
    id:number,
    title:string,
    overview:string,
    original_title:string,
    img:string
}

type movieList = {
    results:[]
}

function Row({title,url,styles}:getItems) {
    const [movies,setMovies]= useState([]);
    useEffect(()=>{
        const fetchMovies =async ()=>{
        try{
                const {data} =await instance.get<movieList>(url);
                setMovies(data.results);
            }catch(error){
                return error
            }
        }
        fetchMovies();
    },[]);
    console.log(movies);
  return (
    <div className={`${styles} flex`}>
        <section className='h-[200px]'>
            <p className='text-bold relative font-mono text-2xl'>{title}</p>
            {!movies ? <p>Loading waiting for movies</p> : (
              movies.map((movie:movie)=>(
                <div key={movie.id} className='flex flex-col bg-red-600 mb-10 p-2 w-[400px] h-[200px]'>
                    <p>{movie.original_title}</p>
                    <div>
                        <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.backdrop_path}`} className='i object-fill h-10'/>
                    </div>
                </div>
            ))  
            )}
        </section>
    </div>
  )
}

export default Row