import { useEffect, useState } from 'react';
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
  RangeMainText,
  RadioInput2,
  StyldeLink,
} from './Calculator.styled';
import Select from 'react-select';

const Calculator = () => {
  const options = [
    { value: 'option1', label: 'Калькулятор для чорно-білих книг' },
  ];

  const options2 = [
    { value: 0.3, label: 'офсетний 170 г/м2' },
    { value: 0.4, label: 'Опция 5' },
    { value: 0.5, label: 'Опция 6' },
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

      '@media (max-width: 740px)': {
        width: '300px', // Изменяем ширину при необходимости
      },
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

  const [selectedOption, setSelectedOption] = useState('1');
  const [selectedOption2, setSelectedOption2] = useState('60');
  const [selectedPaperOption2, setSelectedPaperOption2] = useState(0);
  const [value, setValue] = useState(100);
  const [value2, setValue2] = useState(100);

  const [defPrice, setDefPrice] = useState('');
  const [fullPrice, setFullPrice] = useState('');

  const handleRadioChange = event => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    switch (selectedOption) {
      case '1':
        setDefPrice(
          (
            (value2 * selectedPaperOption2 + parseInt(selectedOption2)) *
            2
          ).toFixed(2)
        );
        break;
      case '2':
        setDefPrice(
          (value2 * selectedPaperOption2 + parseInt(selectedOption2)).toFixed(2)
        );
        break;
      case '3':
        setDefPrice(
          (
            (value2 * selectedPaperOption2 + parseInt(selectedOption2)) /
            2
          ).toFixed(2)
        );
        break;
      default:
    }

    setFullPrice((defPrice * value).toFixed(2));
  }, [
    selectedOption,
    defPrice,
    value2,
    selectedOption2,
    value,
    selectedPaperOption2,
  ]);

  const handleRadioChange2 = event => {
    setSelectedOption2(event.target.value);
  };

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleChange1 = e => {
    setValue2(e.target.value);
  };

  const handleChangePaper = selectedOption => {
    setSelectedPaperOption2(selectedOption.value);
  };

  const scrollToSection = sectionId => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const data = {
    format: selectedOption,
    palit: selectedOption2,
    paper: options2.value,
    naklad: value,
    amount: value2,
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
                name="A4"
                value="1" // умножаем на 2
                checked={selectedOption === '1'}
                onChange={handleRadioChange}
              />
              A4
            </RadioLabel>
            <RadioLabel>
              <RadioInput
                type="radio"
                name="A5"
                value="2"
                checked={selectedOption === '2'}
                onChange={handleRadioChange}
              />
              A5
            </RadioLabel>
            <RadioLabel>
              <RadioInput
                type="radio"
                name="A6" // делим на 2
                value="3"
                checked={selectedOption === '3'}
                onChange={handleRadioChange}
              />
              A6
            </RadioLabel>
          </RadioButtonContainerFormat>

          <LeftMainText>Тверда палітурка чи м'яка обкладинка</LeftMainText>

          <RadioButtonContainerText>
            <RadioLabelText>
              <RadioInput2
                type="radio"
                name="thread"
                value="60"
                checked={selectedOption2 === '60'}
                onChange={handleRadioChange2}
              />
              <RadioSpan>
                Тверда кольорова палітурка 7БЦ. Шиття блоку на нитку. Форзац без
                друку.
              </RadioSpan>
            </RadioLabelText>
            <RadioLabelText>
              <RadioInput2
                type="radio"
                name="glue"
                value="30"
                checked={selectedOption2 === '30'}
                onChange={handleRadioChange2}
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
            value={options2.value}
            onChange={handleChangePaper}
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
                value={value2}
                onChange={handleChange1}
              />
            </RangeContainer>
            <RangeLabels>
              <div>3 шт</div>
              <RangeMainText>{value2}</RangeMainText>
              <div>300 шт</div>
            </RangeLabels>
          </FirstRangeCont>
        </Left>

        <Right>
          <RightMainText>Фінальна вартість</RightMainText>
          <RightInputContainer>
            <RightInputText>Ціна за 1 шт ₴ </RightInputText>
            <RightInput placeholder="" value={defPrice} readOnly />
          </RightInputContainer>
          <RightInputContainer>
            <RightInputText>Сума за наклад ₴ </RightInputText>
            <RightInput placeholder="" value={fullPrice} readOnly />
          </RightInputContainer>
          <StyldeLink
            to="/"
            onClick={() =>
              setTimeout(() => {
                scrollToSection('contacts');
              }, 10)
            }
          >
            <RightButton onClick={sessionStorage.setItem('userData', JSON.stringify(data))}>
              Оформити замовлення
              <Arrow />
            </RightButton>
          </StyldeLink>
        </Right>
      </MainContainer>
    </div>
  );
};

export default Calculator;
