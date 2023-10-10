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

const OurGallery = () => {
  return (
    <OurGalleryContainer>
      <MainText>Останні роботи Майстерні</MainText>
      <MainBigContainer>
        <SmallContainer>
          <SmallPic src={Gal} alt="SmallPic" />
          <SmallPic src={Gal} alt="SmallPic" />
        </SmallContainer>
        <BigContainer>
          <BigPic src={Gal} alt="Gal" />
        </BigContainer>
        <SmallContainer>
          <SmallPic src={Gal} alt="SmallPic" />
          <SmallPic src={Gal} alt="SmallPic" />
        </SmallContainer>
        <BigContainer>
          <BigPic src={Gal} alt="Gal" />
        </BigContainer>
        <SmallContainer>
          <SmallPic src={Gal} alt="SmallPic" />
          <SmallPic src={Gal} alt="SmallPic" />
        </SmallContainer>
        <SmallContainer>
          <SmallPic src={Gal} alt="SmallPic" />
          <SmallPic src={Gal} alt="SmallPic" />
        </SmallContainer>
      </MainBigContainer>
    </OurGalleryContainer>
  );
};

export default OurGallery;
