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
  results: [];
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
    <div className={`${styles} flex flex-col mt-10 w-screen mx-3`}>
      <p className="text-bold relative font-mono text-2xl">{title}</p>
      <section className="flex flex-row overflow-x-auto" style={{WebkitScrollSnapType:"inline"}}>
        <div className="flex">
          {!movies ? (
            <p>Loading, please wait for movies...</p>
          ) : (
            movies.map((movie: movie) => (
              <div
                key={movie.id}
                className="w-[470px] h-[230px] bg-cover ml-10 rounded-lg relative bg-gradient-to-r from-indigo-500 to-red-500"
                style={{
                  backgroundImage: `url(https://www.themoviedb.org/t/p/w600_and_h600_bestv2${movie.backdrop_path})`,
                }}
              >
                <div className="absolute bottom-0 p-4">
                  <p className="text-white font-poppins text-lg font-bold mb-2">
                    {movie.original_title}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}

export default Row;
