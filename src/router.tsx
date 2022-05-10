import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavigationBar } from './components';
import { FavoritePage, MainPage } from './pages';

export const Router = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/favorites' element={<FavoritePage />} />
      </Routes>
    </BrowserRouter>
  );
};
