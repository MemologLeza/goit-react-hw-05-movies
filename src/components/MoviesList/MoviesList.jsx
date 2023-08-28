import PropTypes from 'prop-types';
import styled from './MoviesList.module.css';
import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ moviesData }) => {
  const location = useLocation();
  return (
    <div className={styled.container}>
      <ol className={styled.list}>
        {moviesData.map(movie => (
          <li key={movie.id} className={styled.listItem}>
            <Link
              className={styled.link}
              to={'/movies/' + movie.id}
              state={location}
            >
              {movie.original_title}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};
MoviesList.propTypes = {
  moviesData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
    })
  ),
};
export default MoviesList;
