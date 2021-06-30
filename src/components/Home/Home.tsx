import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllMoviesList } from "../../store/MoviesSlice";
import ImgSlider from "../ImgSlider/ImgSlider";
import Movies from "../Movies/Movies";
import Viewers from "../Viewers/Viewers";
import { Main } from "./Home.styles";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMoviesList());
  }, [dispatch]);

  return (
    <Main>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Main>
  );
};

export default Home;
