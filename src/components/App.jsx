import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import MainSection from "./MainSection/MainSection";
import Services from "./Services/Services";
import News from "./News/News";
import Contact from "./Contact/Contact";

export const App = () => {
  return (
    <div>
      <Header />
      <MainSection />
      <Services />
      <Contact />
      <News/>
      <Footer />
    </div>
  );
};
