import React, {useMemo, useRef, useState} from 'react';
import {useReview} from "../../../hooks/useReview";
import {Col, Container, Row} from "react-bootstrap";
import './Review.style.css'
import {useNavigate, useParams} from "react-router-dom";
import ReviewContent from "./ReviewContent";

const Review = ({img ,idx}) => {
    const {data, isLoading, isError, error} = useReview(idx);
    // console.log("Review", data)
    // const {img} = useParams();

    const [isReviewOn, setIsReviewOn] = useState(false);


    return (
        <div>
            <h3 style={{cursor: !(data?.length === 0) ? "pointer" : "auto",
                pointerEvents: (data?.length === 0) ? "none" : "auto"
                }}
                onClick={()=> {
                data?.length !== 0 ? setIsReviewOn(!isReviewOn) : setIsReviewOn(false);
            }}>리뷰: {data?.length}개
                [{data?.length === 0 ? "없음" : (!isReviewOn ? "열기" : "닫기")}]
            </h3>
            <div style={{display: isReviewOn ? 'block' : 'none'}}>
                <hr style={{marginTop: '2px'}}/>
                {data?.map((item)=>{
                    return <ReviewContent item={item} idx={idx} img={img}/>
                })}
            </div>
        </div>
    );
};

export default Review;