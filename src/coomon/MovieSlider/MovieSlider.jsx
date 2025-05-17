import React from 'react';
import "./MovieSlider.style.css"
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import MoviesCard from "../MoviesCard/MoviesCard";

const MovieSlider = ({sliderTitle, movies, responsive}) => {

    return (
        <div>
            <h3>{sliderTitle}</h3>
            <Carousel
                infinite={true}
                centered={true}
                items={"movie-slider p1"}
                containerClass="carousel-container"
                responsive={responsive}
            >
                {movies.map((movie, idx) => (
                    <MoviesCard movie={movie} idx={idx}></MoviesCard>
                ))}
            </Carousel>
        </div>
    );
};

export default MovieSlider;