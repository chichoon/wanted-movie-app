import axios, { AxiosPromise, AxiosResponse } from 'axios';

const wrapPromise = (promise: AxiosPromise) => {
  let status = 'pending';
  let result: AxiosResponse<any, any>;
  const suspender = promise.then(
    (response) => {
      status = 'success';
      result = response;
    },
    (error) => {
      status = 'error';
      result = error;
    }
  );
  const read = () => {
    if (status === 'pending') throw suspender;
    else if (status === 'error') throw result;
    else if (status === 'success') return result;
    return null;
  };

  return { read };
};

export const fetchWrappedMovieData = (searchValue: string, page: number) => {
  const promise = axios({
    method: 'GET',
    params: {
      apikey: process.env.REACT_APP_MOVIE_API_ID,
      s: searchValue,
      page,
    },
    url: process.env.REACT_APP_MOVIE_API_URL,
  });
  return wrapPromise(promise);
};
