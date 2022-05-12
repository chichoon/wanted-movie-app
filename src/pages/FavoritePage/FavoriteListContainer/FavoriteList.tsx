import { MovieBlock } from 'components';
import { useEffect } from 'react';
import { useMount } from 'react-use';
import { useRecoilState } from 'recoil';

import { IMovie, IFavoriteData } from 'types/movies';
import { favoriteDataState } from 'utils/atoms';

const store = require('store');

export const FavoriteList = () => {
  const [favoriteData, setFavoriteData] = useRecoilState(favoriteDataState);

  useMount(() => {
    const storageData = store.get('storageData');
    if (!storageData) store.set('storageData', favoriteData);
    else setFavoriteData(storageData);
  });
  // TODO: 페이지 새로고침 시에 로컬스토리지 데이터 다 날아가는거 다시 보기

  useEffect(() => {
    store.set('storageData', favoriteData);
  }, [favoriteData]);

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
