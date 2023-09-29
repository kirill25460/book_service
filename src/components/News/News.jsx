import Slider from 'react-slick';
import {NewsContainer} from './News.styled'
import sliderImg from '../../images/sliderImg.png'

const News = () => {
  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };

  const news = [{
    title:'Бестселлер від майстерні',
    subTitle:'Книга “Політ” стає бестселлером на українському ринку, надрукована майстернею, повний огляд з автором нижче.',
    img:sliderImg,
    data:'24.09.2023'
  },
  {
    title:'Бестселлер від майстерні',
    subTitle:'Книга “Політ” стає бестселлером на українському ринку, надрукована майстернею, повний огляд з автором нижче.',
    img:sliderImg,
    data:'24.09.2023'
  },
  {
    title:'Бестселлер від майстерні',
    subTitle:'Книга “Політ” стає бестселлером на українському ринку, надрукована майстернею, повний огляд з автором нижче.',
    img:sliderImg,
    data:'24.09.2023'
  },
  {
    title:'Бестселлер від майстерні',
    subTitle:'Книга “Політ” стає бестселлером на українському ринку, надрукована майстернею, повний огляд з автором нижче.',
    img:sliderImg,
    data:'24.09.2023'
  }]
  return (
    <NewsContainer>
      <Slider {...settings}>
        {news.map(({title, subTitle, img, data}) => {
          return(<div key={title}>
            <p>{title}</p>
            <p>{data}</p>
            <p>{subTitle}</p>
            <img src={img} alt={title} />
          </div>)
        })}
      </Slider>
    </NewsContainer>
  );
};

export default News;
