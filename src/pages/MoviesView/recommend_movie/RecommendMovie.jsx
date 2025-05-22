import React, {useState} from 'react';
import {useRecommendations} from "../../../hooks/useRecommendations";
import MovieSlider from "../../../coomon/MovieSlider/MovieSlider";
import {responsive} from "../../../constants/responsive";

const RecommendMovie = ({idx}) => {
    const {data} = useRecommendations(idx)
    const [isReviewOn, setIsReviewOn] = useState(false);
    // console.log(data?.results)
    return (
        <div>
            <h3 style={{cursor:"pointer"}} onClick={()=>setIsReviewOn(!isReviewOn)}>추천 영화
                [{!isReviewOn ? "열기" : "닫기"}]
            </h3>
            <div style={{display: isReviewOn ? 'block' : 'none'}}>
                <MovieSlider sliderTitle={""} movies={data?.results ? data.results : ["API호출 중..."]} responsive={responsive}></MovieSlider>
            </div>
        </div>
    );
};

export default RecommendMovie;