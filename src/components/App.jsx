import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import CalculatorPage from '../pages/CalculatorPage/CalculatorPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<MainPage/>} />
        <Route path="/calc" element={<CalculatorPage/>} />
      </Routes>
    </>
  );
};
