import { Container, Div } from "./ImgSlider.styles";

const ImgSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
  };
  return (
    <Container {...settings}>
      <Div>
        <img src="/images/slider-badag.jpg" alt="slider 1" />
      </Div>
      <Div>
        <img src="/images/slider-badging.jpg" alt="slider 2" />
      </Div>
    </Container>
  );
};

export default ImgSlider;
