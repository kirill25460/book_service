import { useState } from 'react';
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
  RadioButtonContainerFormat,
  RadioLabel,
  RadioInput,
  RadioButtonContainerText,
  RadioLabelText,
  RadioSpan,
  RangeContainer,
  RangeLabels,
  RangeInput,
  FirstRangeCont,
  RangeMainText
} from './Calculator.styled';
import Select from 'react-select';

const Calculator = () => {
  const options = [
    { value: 'option1', label: 'Калькулятор для чорно-білих книг' },
    { value: 'option2', label: 'Опция 2' },
    { value: 'option3', label: 'Опция 3' },
  ];

  const options2 = [
    { value: 'option4', label: 'офсетний 170 г/м2' },
    { value: 'option5', label: 'Опция 2' },
    { value: 'option6', label: 'Опция 3' },
  ];

  const customStyles = {
    control: provided => ({
      ...provided,
      width: '420px',
      height: '64px',
      borderRadius: '32px',
      borderColor: '#E0C097',
      fontFamily: 'Raleway, sans-serif',
      fontStyle: 'normal', // Добавляем стиль шрифта
      fontWeight: 700, // Добавляем стиль шрифта
      fontSize: '16px', // Добавляем размер шрифта
      lineHeight: '18px', // Добавляем межстрочный интервал
      color: '#5E3F2F', // Добавляем цвет шрифта
      paddingLeft: '8px',
      marginTop: '15px',
      marginBottom: '50px',
      marginLeft: '-13px',
    }),
    singleValue: provided => ({
      ...provided,
      color: '#5E3F2F',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#E0C097' : 'white',
      color: state.isSelected ? '#5E3F2F' : 'orange',
    }),
  };

  const customStyles2 = {
    control: provided => ({
      ...provided,
      width: '265px',
      height: '50px',
      borderRadius: '32px',
      borderColor: '#E0C097',
      fontFamily: 'Raleway, sans-serif',
      fontStyle: 'normal', // Добавляем стиль шрифта
      fontWeight: 700, // Добавляем стиль шрифта
      fontSize: '16px', // Добавляем размер шрифта
      lineHeight: '18px', // Добавляем межстрочный интервал
      color: '#8C5E48', // Добавляем цвет шрифта
      paddingLeft: '8px',
      marginTop: '15px',
      marginBottom: '50px',
      marginLeft: '-13px',
    }),
    singleValue: provided => ({
      ...provided,
      color: '#5E3F2F',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#E0C097' : 'white',
      color: state.isSelected ? '#5E3F2F' : 'orange',
    }),
  };

  const [selectedOption, setSelectedOption] = useState('');
  const [value, setValue] = useState(100);

  const handleRadioChange = event => {
    setSelectedOption(event.target.value);
  };

  const handleChange = e => {
    setValue(e.target.value);
  };

  return (
    <div>
      <MainTitle>Калькулятор вартості послуг</MainTitle>
      <MainContainer>
        <Left>
          <LeftMainText>Вибір колірності друку</LeftMainText>
          <LeftSubText>Друк внутрішнього блоку -1+1 (чорно-білий)</LeftSubText>

          <Select
            options={options}
            styles={customStyles}
            placeholder="Оберіть..."
            isSearchable={false}
          />
          <LeftMainText>Формат книги</LeftMainText>

          <RadioButtonContainerFormat>
            <RadioLabel>
              <RadioInput
                type="radio"
                name="option"
                value="option1"
                checked={selectedOption === 'option1'}
                onChange={handleRadioChange}
              />
              A4
            </RadioLabel>
            <RadioLabel>
              <RadioInput
                type="radio"
                name="option"
                value="option2"
                checked={selectedOption === 'option2'}
                onChange={handleRadioChange}
              />
              A5
            </RadioLabel>
            <RadioLabel>
              <RadioInput
                type="radio"
                name="option"
                value="option3"
                checked={selectedOption === 'option3'}
                onChange={handleRadioChange}
              />
              A6
            </RadioLabel>
          </RadioButtonContainerFormat>

          <LeftMainText>Тверда палітурка чи м'яка обкладинка</LeftMainText>

          <RadioButtonContainerText>
            <RadioLabelText>
              <RadioInput
                type="radio"
                name="option"
                value="option1"
                checked={selectedOption === 'option4'}
                onChange={handleRadioChange}
              />
              <RadioSpan>
                Тверда кольорова палітурка 7БЦ. Шиття блоку на нитку. Форзац без
                друку.
              </RadioSpan>
            </RadioLabelText>
            <RadioLabelText>
              <RadioInput
                type="radio"
                name="option"
                value="option1"
                checked={selectedOption === 'option5'}
                onChange={handleRadioChange}
              />
              <RadioSpan>
                М'яка кольорова обкладинка з ламінацією. Клейове скріплення
                блоку на термобіндері
              </RadioSpan>
            </RadioLabelText>
          </RadioButtonContainerText>

          <LeftMainText>Папір для внутрішнього блоку</LeftMainText>

          <Select
            options={options2}
            styles={customStyles2}
            placeholder="Оберіть..."
            isSearchable={false}
          />

          <LeftMainText>Наклад (кількість шт)</LeftMainText>

          <FirstRangeCont>
            <RangeContainer>
              <RangeInput
                type="range"
                min="3"
                max="300"
                step="1"
                value={value}
                onChange={handleChange}
              />
            </RangeContainer>
            <RangeLabels>
              <div>3 шт</div>
              <RangeMainText>{value}</RangeMainText>
              <div>300 шт</div>
            </RangeLabels>
          </FirstRangeCont>

          <LeftMainText>Кількість сторінок</LeftMainText>

          <FirstRangeCont>
            <RangeContainer>
              <RangeInput
                type="range"
                min="3"
                max="300"
                step="1"
                value={value}
                onChange={handleChange}
              />
            </RangeContainer>
            <RangeLabels>
              <div>3 шт</div>
              <RangeMainText>{value}</RangeMainText>
              <div>300 шт</div>
            </RangeLabels>
          </FirstRangeCont>
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
