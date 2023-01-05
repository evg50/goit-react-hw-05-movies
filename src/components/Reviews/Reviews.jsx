import Api from '../../service/MoviesApi';
import React, { useState, useEffect } from 'react';
// import { useLocation, Link } from 'react-router-dom';

export default function Reviews({ id }) {
  const [reviews, setReviews] = useState([]);
  // const location = useLocation();
  // const backHref = location.state?.from ?? '/';

  console.log('props reviews', id);
  const fetchData = async id => {
    const response = await Api.getMovieReviews(id);
    console.log(response);
    if (response) {
      setReviews(response);
      return;
    }
    console.log('empty reviews');
  };

  useEffect(() => {
    if (!id) {
      return;
    }
    fetchData(id);
  }, [id]);
  return (
    <>
      {reviews && (
        <div>
          <h2>Reviwes</h2>
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <h2>{review.author}</h2>

                <p>{review.content}</p>
              </li>
            ))}
          </ul>{' '}
        </div>
      )}
    </>
  );
}
