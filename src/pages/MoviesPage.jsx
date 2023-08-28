import MoviesList from 'components/MoviesList/MoviesList';
import SearchMovies from 'components/SearchMovies/SearchMovies';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieBySearch } from 'ThemoviedbAPI/ThemoviedbAPI';
const MoviesPage = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [params, setParams] = useSearchParams();
  const searchQuery = useMemo(() => params.get('search'), [params]);
  const handleSearchMovie = useCallback(async () => {
    try {
      const data = await getMovieBySearch(searchQuery);
      const newData = data.map(item => ({
        id: item.id,
        original_title: item.original_title,
      }));
      setMoviesData([...newData]);
    } catch (error) {
      console.log('error', error);
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
      <MoviesList moviesData={moviesData} />
    </div>
  );
};

export default MoviesPage;
