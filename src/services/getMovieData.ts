import axios from 'axios';

export const getMovieData = (searchValue: string, page: number) =>
  axios({
    method: 'GET',
    params: {
      apikey: process.env.REACT_APP_MOVIE_API_ID,
      s: searchValue,
      page,
    },
    url: process.env.REACT_APP_MOVIE_API_URL,
  });
