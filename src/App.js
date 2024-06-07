import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Headertv from "./pages/tvpages/Headertv.js";
import Headermovie from "./pages/moviepages/Headermovie.js";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import Movie from "./pages/moviepages/Movie.js";
import Search from "./pages/Search.js";
import Loading from "./components/common/Loading.js";
import Trendday from "./components/common/Trendday.js";
import Cast from "./pages/Cast.js";
import Tv from "./pages/tvpages/Tv.js";
import MovieGenre from "./pages/moviepages/MovieGenre.js";
import Movierating from "./pages/moviepages/Movierating.js";
import Tvrating from "./pages/tvpages/Tvrating.js";
import MovieRatingGenre from "./pages/moviepages/MovieRatingGenre.js";
import Tvgenre from "./pages/tvpages/Tvgenre.js";
import TvRatingGenre from "./pages/tvpages/TvRatingGenre.js";
import { Provider } from "react-redux";
import { store } from "./reducers/store.js";
import Bookmarks from "./pages/Bookmarks.js";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Headertv" element={<Headertv />} />
            <Route path="/Headermovie" element={<Headermovie />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Movie/:id" element={<Movie />} />
            <Route path="/Search" element={<Search />} />
            <Route path="/Loading" element={<Loading />} />
            <Route path="/Trendday" element={<Trendday />} />
            <Route path="/Cast/:id" element={<Cast />} />
            <Route path="/Tv/:id" element={<Tv />} />
            <Route path="/MovieGenre/:id" element={<MovieGenre />} />
            <Route path="/Movierating" element={<Movierating />} />
            <Route path="/Tvrating" element={<Tvrating />} />
            <Route path="/Bookmarks" element={<Bookmarks />} />
            <Route
              path="/MovieRatingGenre/:id"
              element={<MovieRatingGenre />}
            />
            <Route path="/Tvgenre/:id" element={<Tvgenre />} />
            <Route path="/TvRatingGenre/:id" element={<TvRatingGenre />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
