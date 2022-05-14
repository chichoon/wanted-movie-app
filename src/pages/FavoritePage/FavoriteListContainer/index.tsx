import { useRecoilState } from 'recoil';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import _ from 'lodash';

import { MovieBlock } from 'components';
import { IMovie } from 'types/movies';
import { favoriteDataState } from 'utils/atoms';

import styles from './favoriteListContainer.module.scss';

export const FavoriteListContainer = () => {
  const [favoriteData, setFavoriteData] = useRecoilState(favoriteDataState);

  const handleDragEnd = (r: DropResult) => {
    const movieArrTemp = _.cloneDeep(favoriteData.Movies);
    const imdbArrTemp = _.cloneDeep(favoriteData.imdbIDs);

    const movieArrSrc = movieArrTemp.splice(r.source.index, 1)[0];
    const imdbArrSrc = imdbArrTemp.splice(r.source.index, 1)[0];
    movieArrTemp.splice(r.destination?.index ?? 0, 0, movieArrSrc);
    imdbArrTemp.splice(r.destination?.index ?? 0, 0, imdbArrSrc);

    setFavoriteData({
      Movies: movieArrTemp,
      imdbIDs: imdbArrTemp,
    });
  };

  return (
    <div className={styles.favoriteContainer}>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId='favoriteData'>
          {(droppableProv) => (
            <ul className={styles.favoriteUL} {...droppableProv.droppableProps} ref={droppableProv.innerRef}>
              {favoriteData.Movies.map((v: IMovie, i: number) => (
                <Draggable key={`fav-list-${v.imdbID}`} draggableId={`fav-list-${v.imdbID}`} index={i}>
                  {(DraggableProv) => (
                    <li
                      ref={DraggableProv.innerRef}
                      {...DraggableProv.dragHandleProps}
                      {...DraggableProv.draggableProps}
                    >
                      <MovieBlock movieData={v} />
                    </li>
                  )}
                </Draggable>
              ))}
              {droppableProv.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
