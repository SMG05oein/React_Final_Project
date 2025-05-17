import React from 'react';
import {usePopularMoviesQuery} from "../../../../hooks/usePopularMovies";
import {Alert} from "react-bootstrap";
import 'react-multi-carousel/lib/styles.css';
import "./PopularMovieSlide.style.css"
import MovieSlider from "../../../../coomon/MovieSlider/MovieSlider";
import {responsive} from "../../../../constants/responsive";

const PopularMovieSlide = () => {

    // const responsive = {
    //     desktop: {
    //         breakpoint: { max: 3000, min: 1024 },
    //         items: 6,
    //     },
    //     tablet: {
    //         breakpoint: { max: 1024, min: 464 },
    //         items: 2,
    //     },
    //     mobile: {
    //         breakpoint: { max: 464, min: 0 },
    //         items: 1,
    //     }
    // };

    const {data, isLoading, isError, error} =usePopularMoviesQuery();
    if(isError){
        return <Alert severity="danger">{error.message}</Alert>;
    }

    if(isLoading){
        return <h1>Loading...</h1>
    }else{
        return (
            <div >
                <MovieSlider sliderTitle={"Popular Movies"} movies={data.results} responsive={responsive}/>
                <MovieSlider sliderTitle={"Top Rated Movies"} movies={data.results} responsive={responsive}/>
                <MovieSlider sliderTitle={"Upcoming Movies"} movies={data.results} responsive={responsive}/>

            </div>
        );
    }
};

export default PopularMovieSlide;