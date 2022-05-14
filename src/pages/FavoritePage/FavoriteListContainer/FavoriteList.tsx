import { MovieBlock } from 'components';
import { useRecoilState } from 'recoil';

import { IMovie } from 'types/movies';
import { favoriteDataState } from 'utils/atoms';

export const FavoriteList = () => {
  const [favoriteData, setFavoriteData] = useRecoilState(favoriteDataState);

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
