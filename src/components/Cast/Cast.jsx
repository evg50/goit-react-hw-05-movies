import Api from '../../service/MoviesApi';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CastView from '../../pages/CastView';
export default function Cast({ id }) {
  console.log('component cast :', id);
  const [cast, setCast] = useState([]);
  // const location = useLocation();
  // const backHref = location.state?.from ?? '/';
  // const { movieId } = useParams();
  useEffect(() => {
    // const getParams = getSearchParams();
    // console.log('useEffect');
    // const getParams = params.get('');
    // console.log(getParams);
    const fetchData = async movieId => {
      const data = await Api.getMovieCast(movieId).catch(error => {
        console.log(error);
      });
      console.log('response servise', data);
      setCast(data);

      return data;
    };
    if (id) {
      fetchData(id);
      console.log('QUERY HTTP cast', id);

      return;
    }
  }, [id]);

  return (
    <div>
      Cast
      <CastView cast={cast} />
    </div>
  );
}
