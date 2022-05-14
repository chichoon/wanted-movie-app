import axios, { AxiosPromise, AxiosResponse } from 'axios';

const wrapPromise = (promise: AxiosPromise) => {
  let status = 'pending'; // 데이터 수신 대기중 (resolve되지 않음)
  let result: AxiosResponse<any, any>; // 서버에서 fetching 한 데이터 결과
  const suspender = promise.then(
    (response) => {
      status = 'success';
      result = response; // 결과가 잘 받아졌을 때
    },
    (error) => {
      status = 'error';
      result = error; // 결과가 에러일 때
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
