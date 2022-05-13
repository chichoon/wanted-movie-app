import { MovieBlock } from 'components';
import { useEffect } from 'react';
import { useMount } from 'react-use';
import { useRecoilState } from 'recoil';

import { IMovie } from 'types/movies';
import { favoriteDataState } from 'utils/atoms';

const store = require('store');

export const FavoriteList = () => {
  const [favoriteData, setFavoriteData] = useRecoilState(favoriteDataState);

  useMount(() => {
    const storageData = store.get('storageData');
    setFavoriteData(storageData);
  });

  return (
    <ul>
      {favoriteData.Movies.map((v: IMovie) => (
        <li key={`fav-list-${v.imdbID}`}>
          <MovieBlock movieData={v} />
        </li>
      ))}
    </ul>
  );
};
