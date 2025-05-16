import React from 'react';
import {usePopularMoviesQuery} from "../../../../hooks/usePopularMovies";
import {Alert} from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MoviesCard from "../MoviesCard/MoviesCard";

const PopularMovieSlide = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        }
    };

    const {data, isLoading, isError, error} =usePopularMoviesQuery();
    if(isError){
        return <Alert severity="danger">{error.message}</Alert>;
    }

    if(isLoading){
        return <h1>Loading...</h1>
    }else{
        return (
            <div>
                <h3>Popular Movies</h3>
                <Carousel
                    infinite={true}
                    centered={true}
                    items={"movie-slider p1"}
                    containerClassName="carousel-container"
                    responsive={responsive}
                >
                    {data.results.map((movie,idx) => (<MoviesCard movie={movie} idx={idx}></MoviesCard>))}
                </Carousel>
            </div>
        );
    }
};

export default PopularMovieSlide;