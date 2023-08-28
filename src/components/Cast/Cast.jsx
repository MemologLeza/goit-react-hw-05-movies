import { getMovieCast } from 'ThemoviedbAPI/ThemoviedbAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const setMovieCast = async id => {
      try {
        const data = await getMovieCast(id);
        const newData = data.slice(0, 10).map(item => ({
          id: item.id,
          name: item.name,
          character: item.character,
          profile_path: item.profile_path,
        }));

        setCast([...newData]);
      } catch (error) {
        console.log('error==>', error);
      }
    };
    setMovieCast(id);
  }, [id]);
  return (
    <div style={{ padding: '20px' }}>
      <ul>
        {cast.map(item => (
          <li key={item.id}>
            <img
              style={{ display: 'block' }}
              src={'https://image.tmdb.org/t/p/w200' + item.profile_path}
              alt={item.name}
            />
            <b>{item.name}</b>
            <p>character: {item.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
