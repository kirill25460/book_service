import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import CalculatorPage from '../pages/CalculatorPage/CalculatorPage';
import GalleryPage from '../pages/GalleryPage/GalleryPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<MainPage/>} />
        <Route path="/calc" element={<CalculatorPage/>} />
        <Route path="/gallery" element={<GalleryPage/>} />
      </Routes>
    </>
  );
};
