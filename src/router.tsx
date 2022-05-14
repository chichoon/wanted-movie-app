import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavigationBar, FetchFavoriteData } from './components';
import { FavoritePage, MainPage } from './pages';

export const Router = () => {
  return (
    <BrowserRouter>
      <FetchFavoriteData />
      <NavigationBar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/favorites' element={<FavoritePage />} />
      </Routes>
    </BrowserRouter>
  );
};
