import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavigationBar, FetchFavoriteData } from './components';
import { FavoritePage, MainPage } from './pages';

export const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <FetchFavoriteData />
      <NavigationBar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/favorites' element={<FavoritePage />} />
      </Routes>
    </BrowserRouter>
  );
};
