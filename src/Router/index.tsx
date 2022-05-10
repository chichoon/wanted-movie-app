import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TestComponent } from '../components';
import { NavigationBar } from '../components/NavigationBar';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavigationBar />}>
          <Route path='/' element={<TestComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
