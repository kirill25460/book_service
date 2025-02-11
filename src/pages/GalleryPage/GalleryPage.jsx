import ServiceDescription from '../../components/ServiceDescription/ServiceDescription';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { useEffect } from 'react';
const GalleryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
  <ServiceDescription/>
      <Footer />
    </div>
  );
};

export default GalleryPage;
