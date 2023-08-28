import Loader from 'components/Loader/Loader';
import React, { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieById } from 'ThemoviedbAPI/ThemoviedbAPI';
const MovieDetails = () => {
  const [details, setDetails] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const setMovieDetails = async id => {
      try {
        const data = await getMovieById(id);
        const newData = {
          poster_path: data.poster_path,
          original_title: data.original_title,
          vote_average: data.vote_average,
          overview: data.overview,
          genres: data.genres,
        };
        setDetails({ ...newData });
      } catch (error) {
        console.log('error==>', error);
      }
    };
    setMovieDetails(id);
  }, [id]);
  return (
    <>
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            padding: '20px',
            color: '#010101',
          }}
        >
          <div>
            <img
              src={'https://image.tmdb.org/t/p/w200' + details.poster_path}
              alt="poster"
            />
          </div>
          <div>
            <h2>{details.original_title}</h2>
            <p>Rating: {details.vote_average}</p>
            <p>
              <b>Overview: </b>
              {details.overview}
            </p>
            <p>
              <b>Genres: </b>
              {details.genres?.map(gener => gener.name + ' ')}
            </p>
          </div>
        </div>
        <h4 style={{ padding: '20px' }}>Additional information</h4>
        <ul style={{ listStyle: 'none' }}>
          <li style={{ marginBottom: '20px' }}>
            <Link style={{ textDecoration: 'none' }} to="cast">
              Cast
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: 'none', color: 'black' }}
              to="reviews"
            >
              reviews
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
