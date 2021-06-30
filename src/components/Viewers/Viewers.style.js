import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-evenly;
  margin: 5rem 0;
`;

export const Wrap = styled.div`
  border: 4px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

  transition: all 250ms ease;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 2rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 73%) 0px 30px 22px -10px;
  }
`;
