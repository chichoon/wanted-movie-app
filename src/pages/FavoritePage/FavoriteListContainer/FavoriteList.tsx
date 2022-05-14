import { MovieBlock } from 'components';
import { useRecoilValue } from 'recoil';

import { IMovie } from 'types/movies';
import { favoriteDataState } from 'utils/atoms';

export const FavoriteList = () => {
  const favoriteData = useRecoilValue(favoriteDataState);

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
