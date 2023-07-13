import { useState, useEffect } from 'react';
import instance from '../utils/axios';

type getItems = {
  title: string;
  url: string;
  styles: string;
};

type movie = {
  id: number;
  title: string;
  overview: string;
  original_title: string;
  backdrop_path: string;
};

type movieList = {
  results: movie[];
};

function Row({ title, url, styles }: getItems) {
  const [movies, setMovies] = useState<movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await instance.get<movieList>(url);
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  console.log(movies);

  return (
    <div className='flex mt-20 flex-col'>
      <p className='font-bold'>{title}</p>
      <section className='flex w-screen'>
        <div className='flex h-64 overflow-auto'>
          {!movies ? (
            <p>Loading, please wait for movies...</p>
          ) : (
            <div className='flex'>
              {movies.map((movie: movie) => (
                <div
                  key={movie.id}
                  className='h-full w-96 mr-3 rounded-md'
                  style={{
                    backgroundImage: `url(https://www.themoviedb.org/t/p/w500/${movie.backdrop_path})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                  }}
                >
                  <div className='h-full flex flex-col justify-end p-4'>
                    <p className='text-white text-lg font-semibold'>
                      {movie.original_title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Row;
