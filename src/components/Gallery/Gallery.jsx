import {
  GalleryContainer,
  SmallCont,
  BigCont,
  SmallPict,
  BigPict,
  MainText,
  SubText,
  ButtonContainer,
  LeftBtn,
  RightBtn
} from './Gallery.styled';
import Gal from '../../images/gallery.png';

const Gallery = () => {
  return (
    <>
      <MainText>Мистецькі видання</MainText>
      <SubText>Видання, що об'єднують усі твори художньої літератури, різноманітні за жанрами, часом і місцем їх появи у світ, також в більшості містять в собі графічні витвори мистецтва пов’язані автором чи тематикою або часом.</SubText>
      <GalleryContainer>
        <SmallCont>
          <SmallPict src={Gal} alt="Gal" />
          <SmallPict src={Gal} alt="Gal" />
        </SmallCont>
        <BigCont>
          <BigPict src={Gal} alt="Gal" />
        </BigCont>
        <SmallCont>
          <SmallPict src={Gal} alt="Gal" />
          <SmallPict src={Gal} alt="Gal" />
        </SmallCont>
      </GalleryContainer>
      <ButtonContainer>
        <LeftBtn>Розрахувати вартість</LeftBtn>
        <RightBtn>Оформити замовлення</RightBtn>
      </ButtonContainer>
    </>
  );
};

export default Gallery;
