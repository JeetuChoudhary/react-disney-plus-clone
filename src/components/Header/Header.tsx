/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { auth, provider } from "../../firebase";
import {
  selectUserEmail,
  selectUserName,
  selectUserPhoto,
  setUserLogin,
  setUserSignout,
} from "../../store/UserSlice";
import { Nav, Login } from "./Header.styles";

const Header = () => {
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const userPhoto = useSelector(selectUserPhoto);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user?.displayName,
            email: user?.email,
            photo: user?.photoURL,
          })
        );
      }
    });
  }, [dispatch]);

  const loginUserHandler = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        console.log("response", res);
        dispatch(
          setUserLogin({
            name: res.user?.displayName,
            email: res.user?.email,
            photo: res.user?.photoURL,
          })
        );
        history.replace("/home");
      })
      .catch((error) => {
        console.log("Error while logging in", error);
      });
  };

  const signoutUserHandler = () => {
    dispatch(setUserSignout());
    history.replace("/");
  };

  return (
    <Nav>
      <div className="logo">
        <img src="/images/logo.svg" alt="Disney Plus Logo" />
      </div>

      {!userName && !userEmail ? (
        <Login onClick={loginUserHandler}>Login</Login>
      ) : (
        <>
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
          <div className="profile" onClick={signoutUserHandler}>
            <img src={userPhoto ? userPhoto : ""} alt="User img" />
          </div>
        </>
      )}
    </Nav>
  );
};
export default Header;
