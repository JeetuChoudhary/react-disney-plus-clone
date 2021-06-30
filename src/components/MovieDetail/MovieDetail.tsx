import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getMovieInfo, movieDetail } from "../../store/MoviesSlice";
import {
  Container,
  Background,
  ImageTitle,
  Controls,
  PlayButton,
  TrailerButton,
  AddButton,
  GroupButton,
  SubTitle,
  Description,
} from "./MovieDetail.style";

const MovieDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const movieData = useSelector(movieDetail);

  useEffect(() => {
    dispatch(getMovieInfo(id));
  }, [dispatch, id]);

  if (!movieData) {
    return <p>Loading....</p>;
  }

  return (
    <Container>
      <Background>
        <img src={movieData.backgroundImg} alt="background" />
      </Background>
      <ImageTitle>
        <img src={movieData.titleImg} alt="movie title" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="play button" />
          <span>play</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="Traiiler Icon" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupButton>
          <img src="/images/group-icon.png" alt="group button" />
        </GroupButton>
      </Controls>
      <SubTitle>{movieData.subTitle}</SubTitle>
      <Description>{movieData.description}</Description>
    </Container>
  );
};
export default MovieDetail;
