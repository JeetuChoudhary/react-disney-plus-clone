import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import Login from "./components/Login/Login";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/movie-detail/:id">
          <MovieDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
