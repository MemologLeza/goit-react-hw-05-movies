import { getPopularMovies } from 'ThemoviedbAPI/ThemoviedbAPI';
import { useEffect, useState } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';
const HomePage = () => {
  const [moviesData, setMoviesData] = useState([]);
  useEffect(() => {
    const setMoviesList = async () => {
      try {
        const data = await getPopularMovies();
        const newData = data.map(item => ({
          id: item.id,
          original_title: item.original_title,
        }));
        setMoviesData([...newData]);
      } catch (error) {
        console.log(error);
      }
    };
    setMoviesList();
  }, []);
  return (
    <div>
      <h1>Trending today</h1>
      <MoviesList moviesData={moviesData} />
    </div>
  );
};

export default HomePage;
