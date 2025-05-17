import React from 'react';
import {usePopularMoviesQuery} from "../../../../hooks/usePopularMovies";
import {Alert} from "react-bootstrap";
import 'react-multi-carousel/lib/styles.css';
import "./PopularMovieSlide.style.css"
import MovieSlider from "../../../../coomon/MovieSlider/MovieSlider";
import {responsive} from "../../../../constants/responsive";

const PopularMovieSlide = ({API}) => {

    // const {data, isLoading, isError, error} =usePopularMoviesQuery();
    // const API =usePopularMoviesQuery();

    // if(isError){
    //     return <Alert severity="danger">{error.message}</Alert>;
    // }

    if(API.isLoading){
        return <h1>Loading...</h1>
    }else{
        return (
            <div className="Sliders">
                <MovieSlider sliderTitle={"Popular Movies"} movies={API.data[0].results} responsive={responsive}/>
                <MovieSlider sliderTitle={"Top Rated Movies"} movies={API.data[1].results} responsive={responsive}/>
                <MovieSlider sliderTitle={"Upcoming Movies"} movies={API.data[2].results} responsive={responsive}/>

            </div>
        );
    }
};

export default PopularMovieSlide;