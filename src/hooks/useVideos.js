import { useEffect, useState } from 'react';
import youtube from '../apis/youtube';

const KEY = 'AIzaSyDt_SscEg8dD_bSBQIXUkxgvQlKHYSrk2E';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
      },
    });
    setVideos(response.data.items);
  };
  return [videos, search];
};

export default useVideos;
