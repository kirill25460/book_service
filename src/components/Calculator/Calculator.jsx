import {
  MainTitle,
  MainContainer,
  Left,
  Right,
  RightMainText,
  RightInputContainer,
  RightInputText,
  RightInput,
  RightButton,
  Arrow,
  LeftMainText,
  LeftSubText,
  LeftBigSelect
} from './Calculator.styled';

const Calculator = () => {
  return (
    <div>
      <MainTitle>Калькулятор вартості послуг</MainTitle>
      <MainContainer>
        <Left>
          <LeftMainText>Вибір колірності друку</LeftMainText>
          <LeftSubText>Друк внутрішнього блоку -1+1 (чорно-білий)</LeftSubText>
          <div>
            <LeftBigSelect id="mySelect">
              <option value="">Выберите...</option>
              <option value="option1">Опция 1</option>
              <option value="option2">Опция 2</option>
              <option value="option3">Опция 3</option>
            </LeftBigSelect>
          </div>
        </Left>
        <Right>
          <RightMainText>Фінальна вартість</RightMainText>
          <RightInputContainer>
            <RightInputText>Ціна за 1 шт ₴ </RightInputText>
            <RightInput />
          </RightInputContainer>
          <RightInputContainer>
            <RightInputText>Сума за наклад ₴ </RightInputText>
            <RightInput />
          </RightInputContainer>
          <RightButton>
            Оформити замовлення
            <Arrow />
          </RightButton>
        </Right>
      </MainContainer>
    </div>
  );
};

export default Calculator;
