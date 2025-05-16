import React from 'react';
import Banner from "./components/banner/Banner";
import PopularMovieSlide from "./components/PopularMovieSlide/PopularMovieSlide";

const HomePage = () => {
    return (
        <div>
            <Banner/>
            <PopularMovieSlide/>
        </div>
    );
};

export default HomePage;