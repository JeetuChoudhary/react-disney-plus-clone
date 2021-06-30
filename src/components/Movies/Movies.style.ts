import styled from "styled-components";

export const Container = styled.section`
  margin-bottom: 5rem;
`;

export const Content = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  padding: 3px 0 55px;
  overflow-y: hidden;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  &:last-child {
    margin-right: auto;
  }
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const Wrap = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  flex: 0 0 15%;
  overflow: hidden;
  scroll-behavior: smooth;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

  transition: all 250ms ease;

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
