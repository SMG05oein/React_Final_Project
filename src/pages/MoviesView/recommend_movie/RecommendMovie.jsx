import React, {useState} from 'react';
import {useRecommendations} from "../../../hooks/useRecommendations";
import MovieSlider from "../../../coomon/MovieSlider/MovieSlider";
import {responsive} from "../../../constants/responsive";

const RecommendMovie = ({idx}) => {
    const {data} = useRecommendations(idx)
    const [isReviewOn, setIsReviewOn] = useState(false);
    console.log(data)
    return (
        <div>
            <h3 style={{cursor: !(data?.results.length === 0) ? "pointer" : "auto",
                pointerEvents: (data?.results.length === 0) ? "none" : "auto"}}
                onClick={()=>setIsReviewOn(!isReviewOn)}>추천 영화
                [{data?.results.length === 0 ? "없음" : (!isReviewOn ? "열기" : "닫기")}]
            </h3>
            <div style={{display: isReviewOn ? 'block' : 'none'}}>
                <MovieSlider sliderTitle={""} movies={data?.results ? data.results : ["API호출 중..."]} responsive={responsive}></MovieSlider>
            </div>
        </div>
    );
};

export default RecommendMovie;