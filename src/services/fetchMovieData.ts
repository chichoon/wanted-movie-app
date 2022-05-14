import axios from 'axios';

export const fetchMovieData = async (searchValue: string, page: number) => {
  let response;
  try {
    response = await axios({
      method: 'GET',
      params: {
        apikey: process.env.REACT_APP_MOVIE_API_ID,
        s: searchValue,
        page,
      },
      url: process.env.REACT_APP_MOVIE_API_URL,
    });
  } catch {
    return null;
  }
  return response?.data;
};
