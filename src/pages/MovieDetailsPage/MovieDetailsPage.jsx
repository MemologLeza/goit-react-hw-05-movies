import MovieDetails from 'components/MovieDetails/MovieDetails';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from './MovieDetailsPage.module.css';
const MovieDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(location.state ?? '/goit-react-hw-05-movies');
  };
  return (
    <div>
      <button className={styled.btn} onClick={handleClick}>
        Go back=
      </button>
      <MovieDetails />
    </div>
  );
};

export default MovieDetailsPage;
