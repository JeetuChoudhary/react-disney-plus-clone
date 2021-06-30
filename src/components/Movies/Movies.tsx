import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { moviesList } from "../../store/MoviesSlice";
import { Container, Content, Wrap } from "./Movies.style";

const Movies = () => {
  const movies = useSelector(moviesList);

  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        {movies.map((movie) => (
          <Wrap key={movie.id}>
            <Link to={`movie-detail/${movie.id}`}>
              <img src={movie.cardImg} alt={movie.title} />
            </Link>
          </Wrap>
        ))}
      </Content>
    </Container>
  );
};
export default Movies;
