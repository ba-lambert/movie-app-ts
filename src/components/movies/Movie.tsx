import { useFetchProducts } from '../hooks';
function Movie() {
    const movies = useFetchProducts();    
    console.log(movies);
  return (
    <div className=''> 
        {movies.movies.isLoading && <p className='text-3xl'>Loading please wait!</p>}
        {movies.movies.movies.results && movies.movies.movies.results.map((movie)=>(
            <div key={movie.id}>
                <p>{movie.title}</p>
                <p>{movie.overview}</p>
                <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.backdrop_path}`} />
            </div>
        ))}
    </div>
  )
}

export default Movie