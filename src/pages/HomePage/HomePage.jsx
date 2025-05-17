import React from 'react';
import Banner from "./components/banner/Banner";
import PopularMovieSlide from "./components/PopularMovieSlide/PopularMovieSlide";
import {usePopularMoviesQuery} from "../../hooks/usePopularMovies";
import {Alert} from "react-bootstrap";
import './HomePage.style.css'

const HomePage = () => {
    const API = usePopularMoviesQuery();
    console.log("HomePage: ", API);

    if (API.isLoading) {
        return <h1 className={"loading"}></h1>;
    }

    if (API.isError) {
        return (
            <div>
                <h1>에러 발생...</h1>
                {API.error? (
                    <Alert variant={"danger"}>에러 메시지: {API.error[0]?.message}</Alert>
                ) : (
                    <div>에러 원인 찾는 중...</div>
                )}
            </div>
        );
    }

    return (
        <div>
            <Banner API={API} />
            <PopularMovieSlide API={API} />
        </div>
    );
};



export default HomePage;