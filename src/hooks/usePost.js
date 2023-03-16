import { useEffect, useState } from 'react';
import config from '../config';

const usePost = () => {
  const [posts, setPots] = useState([]);

  useEffect(() => {
    fetch(config.URL_API)
      .then(res => res.json())
      .then(data => {
        setPots(data.posts);
      })
      .catch(err => console.error(err));
  }, []);

  return posts;
};

export default usePost;
