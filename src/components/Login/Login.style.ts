import styled from "styled-components";

export const Container = styled.section`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;

  &:before {
    content: "";
    position: absolute;
    background: url("/images/login-background.jpg") top / cover no-repeat;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const LoginLogoOne = styled.div`
  width: 70%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const LoginActionButton = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  background: #0063ef;
  width: 70%;
  text-align: center;
  padding: 1rem;
  border-radius: 10px;
  font-size: 1.2rem;
  cursor: pointer;
  margin: 1rem 0;

  &:hover {
  }
`;

export const Description = styled.p`
  width: 70%;
  text-align: center;
  line-height: 1.7;
  letter-spacing: 1.4px;
  font-size: 1rem;
`;
export const LoginLogoTwo = styled.div`
  width: 65%;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
