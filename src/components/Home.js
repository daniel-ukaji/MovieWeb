import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Movies from './Movies'
import Movie from './Movie'

function Home() {
  const [popular, setPopular] = useState([]);

  const url =
  "https://api.themoviedb.org/3/discover/movie?api_key=12ca358b9af2497731c98a1b7a6caabd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";
  useEffect(() => {
    fetchPopular();
  },[]);


  const fetchPopular = async () => {
    const data = await fetch(url);
    const movies = await data.json();
    console.log(movies);
    setPopular(movies.results);
  };

  return (
    <Container>
        <ImgSlider />
        <Viewers />
        <div className="popular-movies">
        {popular.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </Container>
  );
}

export default Home


const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;

    &:before {
        background: url("/images/home-background.png") center center / cover;
        no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }


`