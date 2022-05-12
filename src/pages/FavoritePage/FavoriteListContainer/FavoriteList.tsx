import { MovieBlock } from 'components';
import { useEffect } from 'react';
import { useMount } from 'react-use';
import { useRecoilState } from 'recoil';

import { IMovie, IFavoriteData } from 'types/movies';
import { favoriteDataState } from 'utils/atoms';

const store = require('store');

const TEST_DATA: IFavoriteData = {
  Movies: [
    {
      Title: 'The Maze Runner',
      Year: '2014',
      imdbID: 'tt1790864',
      Type: 'movie',
      Poster: 'https://m.media-amazon.com/images/M/MV5BMjUyNTA3MTAyM15BMl5BanBnXkFtZTgwOTEyMTkyMjE@._V1_SX300.jpg',
    },
    {
      Title: 'Into the Grizzly Maze',
      Year: '2015',
      imdbID: 'tt1694021',
      Type: 'movie',
      Poster: 'https://m.media-amazon.com/images/M/MV5BMjExOTkxMTIzN15BMl5BanBnXkFtZTgwNjcxNzY2NTE@._V1_SX300.jpg',
    },
  ],
  imdbIDs: ['tt1790864', 'tt1694021'],
};

export const FavoriteList = () => {
  const [favoriteData, setFavoriteData] = useRecoilState(favoriteDataState);

  useMount(() => {
    let storageData = store.get('storageData');
    if (!storageData) store.set('storageData', favoriteData);
    else setFavoriteData(storageData);
    console.log(storageData);
  });

  useEffect(() => {
    store.set('storageData', favoriteData);
  }, [favoriteData]);

  return (
    <ul>
      {TEST_DATA.Movies.map((v: IMovie) => (
        <li key={`fav-list-${v.imdbID}`}>
          <MovieBlock movieData={v} />
        </li>
      ))}
    </ul>
  );
};
