import Slider from 'react-slick';
import {
  NewsContainer,
  Next,
  Prev,
  SlideContainer,
  SlideConText,
  SlideImg,
  SlideMainText,
  SlideData,
  SlideSubText,
  SlideButton,
  Search,
  Hide
} from './News.styled';
import sliderImg from '../../images/sliderImg.png';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Next
      className={className}
      style={{
        ...style,
        display: 'block',
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Prev
      className={className}
      style={{
        ...style,
        display: 'block',
      }}
      onClick={onClick}
    />
  );
}

const News = () => {
  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const news = [
    {
      title: 'Бестселлер від майстерні',
      subTitle:
        'Книга “Політ” стає бестселлером на українському ринку, надрукована майстернею, повний огляд з автором нижче.',
      img: sliderImg,
      data: '24.09.2023',
    },
    {
      title: 'Бестселлер від майстерні',
      subTitle:
        'Книга “Політ” стає бестселлером на українському ринку, надрукована майстернею, повний огляд з автором нижче.',
      img: sliderImg,
      data: '24.09.2023',
    },
    {
      title: 'Бестселлер від майстерні',
      subTitle:
        'Книга “Політ” стає бестселлером на українському ринку, надрукована майстернею, повний огляд з автором нижче.',
      img: sliderImg,
      data: '24.09.2023',
    },
    {
      title: 'Бестселлер від майстерні',
      subTitle:
        'Книга “Політ” стає бестселлером на українському ринку, надрукована майстернею, повний огляд з автором нижче.',
      img: sliderImg,
      data: '24.09.2023',
    },
  ];
  return (
    <NewsContainer id="news">
      <Slider {...settings}>
        {news.map(({ title, subTitle, img, data }) => {
          return (
            <SlideContainer key={title}>
              <SlideConText>
                <SlideMainText>{title}</SlideMainText>
                <SlideData>{data}</SlideData>
                <SlideSubText>{subTitle}</SlideSubText>
                <SlideButton><Search/>Переглянути <Hide>повністю</Hide></SlideButton>
              </SlideConText>
              <SlideImg src={img} alt={title} />
            </SlideContainer>
          );
        })}
      </Slider>
    </NewsContainer>
  );
};

export default News;
