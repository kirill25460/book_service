import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import MainSection from '../../components/MainSection/MainSection';
import Services from '../../components/Services/Services';
import News from '../../components/News/News';
import Contact from '../../components/Contact/Contact';

const MainPage = () => {
  return (
    <div>
      <Header />
      <MainSection />
      <Services />
      <Contact />
      <News />
      <Footer />
    </div>
  );
};

export default MainPage;
