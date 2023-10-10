import styled from 'styled-components';
import { FaArrowAltCircleUp } from 'react-icons/fa';

export const ArrowDiv = styled.div`
  position: fixed;
  bottom: 40px;
  right: 40px;
  cursor: pointer;
  z-index: 999;
  opacity: 0; /* Начальное значение прозрачности */
  transition: opacity 0.5s; /* Длительность и тип анимации */
`;

export const ArrowImg = styled(FaArrowAltCircleUp)`
  width: 50px;
  height: 160px;
  color: #c2744d;
`;
