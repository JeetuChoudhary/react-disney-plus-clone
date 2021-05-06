/* eslint-disable jsx-a11y/anchor-is-valid */
import { Nav } from "./Header.styles";

const Header = () => {
  return (
    <Nav>
      <div className="logo">
        <img src="/images/logo.svg" alt="Disney Plus Logo" />
      </div>

      <div className="nav-menu">
        <a href="#" className="nav-menu__item">
          <img src="/images/home-icon.svg" alt="Home Icon" />
          <span>Home</span>
        </a>
        <a href="#" className="nav-menu__item">
          <img src="/images/search-icon.svg" alt="Search Icon" />
          <span>Search</span>
        </a>
        <a href="#" className="nav-menu__item">
          <img src="/images/watchlist-icon.svg" alt="Watchlist Icon" />
          <span>Watchlist</span>
        </a>
        <a href="#" className="nav-menu__item">
          <img src="/images/original-icon.svg" alt="Original Icon" />
          <span>Originals</span>
        </a>
        <a href="#" className="nav-menu__item">
          <img src="/images/movie-icon.svg" alt="Movies Icon" />
          <span>Movies</span>
        </a>
        <a href="#" className="nav-menu__item">
          <img src="/images/series-icon.svg" alt="Series Icon" />
          <span>Series</span>
        </a>
      </div>
      <div className="profile">
        <img src="/images/profile-img.jpg" alt="User img" />
      </div>
    </Nav>
  );
};
export default Header;
