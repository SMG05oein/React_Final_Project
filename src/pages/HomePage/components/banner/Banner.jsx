import React from 'react';
import {usePopularMoviesQuery} from "../../../../hooks/usePopularMovies";
import {Alert} from "react-bootstrap";
import './Banner.style.css'

const Banner = ({API}) => {
    // const {data, isLoading, isError, error} = usePopularMoviesQuery();
    // const API = usePopularMoviesQuery();

    // console.log("data: ", API)
    let apiData = API.data;

    // if(isError){
    //     return <Alert variant={'danger'}>{error.message}</Alert>
    // }

    if(API.isLoading){
        return <h1>Loading...</h1>
    }else {
        return (
            <div className={'banner'} style={{backgroundImage: "url(" + `https://www.themoviedb.org/t/p/w1066_and_h600_bestv2${API.data[0]?.results[0].poster_path}` + ")"}}>
                <div className="text-white banner-text-area">
                    <h1>{API.data[0].results[0].title}</h1>
                    <p>{API.data[0].results[0].overview}</p>
                </div>
            </div>
        );
    }
};

export default Banner;