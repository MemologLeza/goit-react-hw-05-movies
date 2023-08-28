import MoviesList from 'components/MoviesList/MoviesList';
import SearchMovies from 'components/SearchMovies/SearchMovies';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieBySearch } from 'ThemoviedbAPI/ThemoviedbAPI';
import Loader from 'components/Loader/Loader';
const MoviesPage = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [params, setParams] = useSearchParams();
  const searchQuery = useMemo(() => params.get('search'), [params]);
  const handleSearchMovie = useCallback(async () => {
    try {
      setLoader(true);
      const data = await getMovieBySearch(searchQuery);
      const newData = data.map(item => ({
        id: item.id,
        original_title: item.original_title,
      }));

      setMoviesData([...newData]);
      setLoader(false);
    } catch (error) {
      console.log('error', error);
      setLoader(false);
    }
  }, [searchQuery]);
  useEffect(() => {
    searchQuery && handleSearchMovie();
  }, [searchQuery, handleSearchMovie]);

  const handleSearch = query => {
    setParams({ search: query });
    setMoviesData([]);
  };
  return (
    <div>
      <SearchMovies handleSearch={handleSearch} />
      {loader && <Loader />}
      {!loader && moviesData.length === 0 && searchQuery ? (
        <h2>Not found</h2>
      ) : (
        <MoviesList moviesData={moviesData} />
      )}
    </div>
  );
};

export default MoviesPage;
