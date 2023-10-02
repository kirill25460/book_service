import {
  ContactContainer,
  Left,
  Right,
  FormContainer,
  FormText,
  FormSmallInput,
  FormSmallContainer,
  FormBigContainer,
  FormBigInput
} from './Contact.stylde';

const Contact = () => {
  return (
    <ContactContainer>
      <Left>
        <FormContainer>
          <FormSmallContainer>
            <FormText>Ім’я</FormText>
            <FormSmallInput placeholder='Василь Митенко...'/>
          </FormSmallContainer>
          <FormSmallContainer>
            <FormText>Email</FormText>
            <FormSmallInput placeholder='example@email.com'/>
          </FormSmallContainer>
          <FormSmallContainer>
            <FormText>Номер телефону</FormText>
            <FormSmallInput placeholder='+380 123 4 56 789'/>
          </FormSmallContainer>
          <FormSmallContainer>
            <FormText>Компанія (необов’язково)</FormText>
            <FormSmallInput placeholder='Facebook'/>
          </FormSmallContainer>
          <FormBigContainer>
            <FormText>Коментар</FormText>
            <FormBigInput />
          </FormBigContainer>
        </FormContainer>
      </Left>
      <Right></Right>
    </ContactContainer>
  );
};

export default Contact;
