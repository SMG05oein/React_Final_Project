import React from 'react';
import {usePopularMoviesQuery} from "../../../../hooks/usePopularMovies";
import {Alert} from "react-bootstrap";
import './Banner.style.css'

const Banner = () => {
    const {data, isLoading, isError, error} = usePopularMoviesQuery();
    console.log(data)

    if(isError){
        return <Alert variant={'danger'}>{error.message}</Alert>
    }

    if(isLoading){
        return <h1>Loading...</h1>
    }else {
        return (
            <div className={'banner'} style={{backgroundImage: "url(" + `https://www.themoviedb.org/t/p/w1066_and_h600_bestv2${data?.results[0].poster_path}` + ")"}}>
                <div className="text-white banner-text-area">
                    <h1>{data.results[0].title}</h1>
                    <p>{data.results[0].overview}</p>
                </div>
            </div>
        );
    }
};

export default Banner;