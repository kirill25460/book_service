import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import CalculatorPage from '../pages/CalculatorPage/CalculatorPage';
import GalleryPage from '../pages/GalleryPage/GalleryPage';
import OurGalleryPage from 'pages/OurGallery/OurGalleryPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<MainPage/>} />
        <Route path="/calc" element={<CalculatorPage/>} />
        <Route path="/gallery" element={<GalleryPage/>} />
        <Route path="/ourGallery" element={<OurGalleryPage/>} />
      </Routes>
    </>
  );
};
