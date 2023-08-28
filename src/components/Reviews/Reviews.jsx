import { getMovieReviews } from 'ThemoviedbAPI/ThemoviedbAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const setMovieReviews = async id => {
      try {
        const data = await getMovieReviews(id);
        const newData = data.map(item => ({
          id: item.id,
          author: item.author,
          content: item.content,
        }));
        setReviews([...newData]);
      } catch (error) {
        console.log('error', error);
      }
    };
    setMovieReviews(id);
  }, [id]);
  return (
    <div style={{ padding: '20px' }}>
      <ul>
        {reviews.length === 0 ? (
          <p>We don't have any reviews for this movie(</p>
        ) : (
          reviews.map(item => (
            <li key={item.id}>
              <b>Author: {item.author}</b>
              <p>{item.content}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Reviews;
