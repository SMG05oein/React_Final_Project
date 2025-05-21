import React, {Suspense} from 'react';
import Banner from "./components/banner/Banner";
import PopularMovieSlide from "./components/PopularMovieSlide/PopularMovieSlide";
import {usePopularMoviesQuery} from "../../hooks/usePopularMovies";
import {Alert} from "react-bootstrap";
import './HomePage.style.css'

const HomePage = () => {
    const API = usePopularMoviesQuery();
    // console.log("HomePage: ", API);

    // <Suspense fallback={<div>Loading...</div>}></Suspense>;
    /**위에껀 로딩 관련 된 거
    요런 게 있는데 API를 홈페이지에서 get요청으로 가지고 오고 그걸 프롬스로 뿌리기 때문에 안 해도 될 거 같음*/

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
                    <div className={"error"}>에러 원인 찾는 중...</div> //웃긴 건 이거 로딩땜에 안 나옴ㅋㅋㅋㅋ
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