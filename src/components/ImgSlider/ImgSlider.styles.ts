import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export const Container = styled(Slider)`
  margin-top: 20x;

  .slick-list {
    overflow: visible;
  }

  .slick-dots li {
    .slick-active {
      color: #fff;
    }
    button::before {
      color: rgb(150, 158, 171);
      font-size: 10px;
    }
  }

  li.slick-active button::before {
    color: #fff;
  }

  button {
    z-index: 1;
  }
`;

export const Div = styled.div`
  cursor: pointer;
  img {
    display: inline-block;
    width: 100%;
    height: 100%;
    border: 4px solid transparent;
    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;

    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;
