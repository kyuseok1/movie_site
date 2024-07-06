import React, { useState } from "react";
import Header from "../_layout/Header";
import { Container } from "react-bootstrap";
import Trendday from "../components/common/Trendday";
import HomeMovieGenre from "../components/movie/HomeMovieGenre";
import "./Home.css";

const Section = ({ title, trend, setTrend, isMovie }) => (
  <>
    <section>
      <div className="home3">
        <div className="home3-inner">
          <h1>{title} Tranding</h1>
          <div className="button-container">
            <button
              id={trend ? "home3pink" : ""}
              onClick={() => setTrend(true)}
            >
              <a>일간</a>
            </button>
            <button
              id={!trend ? "home3pink" : ""}
              onClick={() => setTrend(false)}
            >
              <a>주간</a>
            </button>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="home4">
        {trend ? (
          <Trendday name={isMovie ? "movie" : "tv"} name2="day" />
        ) : (
          <Trendday name={isMovie ? "movie" : "tv"} name2="week" />
        )}
      </div>
    </section>
  </>
);

const genres = {
  movie: [
    { genre: "16", name: "애니메이션" },
    { genre: "28", name: "액션" },
    { genre: "14", name: "판타지" },
  ],
  tv: [
    { genre: "35", name: "코미디" },
    { genre: "18", name: "드라마" },
    { genre: "80", name: "범죄" },
  ],
};

const Home = () => {
  const [trendMovie, setTrendMovie] = useState(true);
  const [trendTV, setTrendTV] = useState(true);

  return (
    <>
      <Header />
      <main>
        <Container className="con">
          <section>
            <div className="first-container">
              <div className="home">
                <div className="home2">
                  <h2> 최신 영화와 인기 TV 프로그램을 한눈에 찾아보세요!</h2>
                </div>
              </div>
            </div>
          </section>
          <Section
            title="Movie"
            trend={trendMovie}
            setTrend={setTrendMovie}
            isMovie
          />
          {genres.movie.map(({ genre, name }) => (
            <HomeMovieGenre
              key={genre}
              genre={genre}
              name={name}
              name2="movie"
            />
          ))}
          <Section title="Tv" trend={trendTV} setTrend={setTrendTV} />
          {genres.tv.map(({ genre, name }) => (
            <HomeMovieGenre key={genre} genre={genre} name={name} name2="tv" />
          ))}
        </Container>
      </main>
    </>
  );
};

export default Home;
