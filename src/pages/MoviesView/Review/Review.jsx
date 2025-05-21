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


    // console.log(ItemContent);

    return (
        <div>
            <h3>리뷰: {data?.length}개</h3>
            <hr style={{marginTop: '2px'}}/>
            {data?.map((item)=>{
                // console.log(item);
                return <ReviewContent item={item} idx={idx} img={img}/>
            })}
                {/*{data?.map((item) => (*/}
                {/*    <Container>*/}
                {/*        <div className={"Box"} onClick={()=>{navigate(`/movies/review/${item.id}/${idx}`)}}>*/}
                {/*            <Row>*/}
                {/*                <Col><strong>작성자: {item.author}</strong></Col>*/}
                {/*                <Col><div>작성일: {item.created_at.substr(0, 10)}</div></Col>*/}
                {/*                <Row>*/}
                {/*                    <Col>*/}
                {/*                        /!*{item.content}*!/*/}
                {/*                        <div>*/}
                {/*                            {ItemContent?.map((ia)=>(*/}
                {/*                                <div>*/}
                {/*                                    {ia}*/}
                {/*                                </div>*/}
                {/*                            ))}*/}
                {/*                        </div>*/}
                {/*                    </Col>*/}
                {/*                </Row>*/}
                {/*            </Row>*/}
                {/*        </div>*/}
                {/*        <div className={"check_text"} onClick={() => setIsShowMore(!isShowMore)}>*/}
                {/*            {item.content.length > textLimit.current && isShowMore ? "[접기]" : "...[더보기]"}*/}
                {/*        </div>*/}
                {/*    </Container>*/}
                {/*))}*/}
        </div>
    );
};

export default Review;