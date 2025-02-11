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
} from './ServiceDescription.styled';

import { useParams } from 'react-router-dom';
import { configServiceDescription } from './configServiceDescription';

const ServiceDescription = () => {
  const { id } = useParams();
  const product = configServiceDescription.find(
    item => item.id === parseInt(id)
  );

  return (
    <>
      <MainText>{product.title}</MainText>
      <SubText>{product.description}</SubText>
      <GalleryContainer>
        <SmallCont>
          <SmallPict src={product.images[0]} alt="Gal" />
          <SmallPict src={product.images[2]} alt="Gal" />
        </SmallCont>
        <BigCont>
          <BigPict src={product.images[1]} alt="Gal" />
        </BigCont>
        <SmallCont>
          <SmallPict src={product.images[3]} alt="Gal" />
          <SmallPict src={product.images[4]} alt="Gal" />
        </SmallCont>
      </GalleryContainer>
      <ButtonContainer>
        <LeftBtn>Розрахувати вартість</LeftBtn>
        <RightBtn>Оформити замовлення</RightBtn>
      </ButtonContainer>
    </>
  );
};

export default ServiceDescription;
