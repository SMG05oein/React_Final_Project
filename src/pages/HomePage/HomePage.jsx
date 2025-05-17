import React from 'react';
import Banner from "./components/banner/Banner";
import PopularMovieSlide from "./components/PopularMovieSlide/PopularMovieSlide";
import {usePopularMoviesQuery} from "../../hooks/usePopularMovies";
import {Alert} from "react-bootstrap";

const HomePage = () => {
    const API = usePopularMoviesQuery();
    console.log("HomePage: " ,API);
    try{
        if(API.isLoading){
            return <h1>Loading...</h1>
        }
        return (
            <div>
                <Banner API={API}/>
                <PopularMovieSlide API={API}/>
            </div>
        );

    }catch{
        return(
            <div>
                {/*에러 메시지:  {API[0]?.error.message}*/}
                <h1>에러 발생...</h1>
                {(!API.isError && API.error[0] == null) ? (<div>에러 원인 찾는 중...</div>) : (<div>에러 메시지: {API.error[0]?.message}</div>)}
            </div>
        )
    }



        // return (
        //     <div>
        //         <Banner/>
        //         <PopularMovieSlide/>
        //     </div>
        // );

};

export default HomePage;