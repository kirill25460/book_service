import {
  OurGalleryContainer,
  MainText,
  SmallContainer,
  SmallPic,
  MainBigContainer,
  BigContainer,
  BigPic
} from './OurGallery.styled';
import Gal from '../../images/gallery.png';
import knugu1 from '../../images/knugu1.jpg';
import knugu2 from '../../images/knugu2.jpg';
import knugu3 from '../../images/knugu3.jpg';
import knugu4 from '../../images/knugu4.jpg';
import knugu5 from '../../images/knugu5.jpg';
import knugu6 from '../../images/knugu6.jpg';

const OurGallery = () => {
  return (
    <OurGalleryContainer>
      <MainText>Останні роботи Майстерні</MainText>
      <MainBigContainer>
        <SmallContainer>
          <SmallPic src={knugu1} alt="SmallPic" />
          <SmallPic src={knugu3} alt="SmallPic" />
        </SmallContainer>
        <BigContainer>
          <BigPic src={knugu2} alt="Gal" />
        </BigContainer>
        <SmallContainer>
          <SmallPic src={knugu4} alt="SmallPic" />
          <SmallPic src={knugu6} alt="SmallPic" />
        </SmallContainer>
        <BigContainer>
          <BigPic src={knugu5} alt="Gal" />
        </BigContainer>
        <SmallContainer>
          <SmallPic src={knugu1} alt="SmallPic" />
          <SmallPic src={knugu2} alt="SmallPic" />
        </SmallContainer>
        <SmallContainer>
          <SmallPic src={knugu3} alt="SmallPic" />
          <SmallPic src={knugu4} alt="SmallPic" />
        </SmallContainer>
      </MainBigContainer>
    </OurGalleryContainer>
  );
};

export default OurGallery;
