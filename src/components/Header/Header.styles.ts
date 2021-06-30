import styled from "styled-components";

export const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2%;
  overflow-x: hidden;

  .logo {
    width: 80px;
    margin-right: 3%;
  }

  .nav-menu {
    display: flex;
    flex: 1;

    &__item:link,
    &__item:visited {
      text-decoration: none;
      display: flex;
      align-items: center;

      &:not(:last-child) {
        margin-right: 15px;
      }

      img {
        width: 20px;
        padding-right: 3px;
      }

      span {
        font-size: 13px;
        letter-spacing: 1.4px;
        text-transform: uppercase;
        color: #fff;
        position: relative;

        &::after {
          content: "";
          height: 3px;
          background-color: #fff;
          position: absolute;
          left: 0;
          right: 0;
          bottom: -6px;
          opacity: 0;
          transform: scaleX(0);
          transition: all 0.25s;
        }
      }

      &:hover span::after {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }

  .profile {
    cursor: pointer;
    img {
      height: 50px;
      width: 50px;
      object-fit: cover;
      border-radius: 50%;
    }
  }
`;

export const Login = styled.button`
  background-color: rgba(0, 0, 0, 0.3);
  color: #f9f9f9;
  border: 2px solid #f9f9f9;
  border-radius: 4px;
  padding: 0.4rem 1.5rem;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 600;
  transition: all 250ms ease;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;
