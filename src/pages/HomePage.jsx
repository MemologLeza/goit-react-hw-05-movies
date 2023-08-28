import { getPopularMovies } from 'ThemoviedbAPI/ThemoviedbAPI';
import { useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
const HomePage = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    const setMoviesList = async () => {
      try {
        setLoader(true);
        const data = await getPopularMovies();
        const newData = data.map(item => ({
          id: item.id,
          original_title: item.original_title,
        }));
        setMoviesData([...newData]);
        setLoader(false);
      } catch (error) {
        setLoader(false);
        console.log(error);
      }
    };
    setMoviesList();
  }, []);
  return (
    <div>
      <h1>Trending today</h1>
      {loader && <Loader />}
      <MoviesList moviesData={moviesData} />
    </div>
  );
};

export default HomePage;
