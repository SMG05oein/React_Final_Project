import React from 'react';
import {useReview} from "../../../hooks/useReview";
import {Col, Container, Row} from "react-bootstrap";
import './Review.style.css'

const Review = ({idx}) => {
    const {data, isLoading, isError, error} = useReview(idx);
    console.log("Review", data)

    return (
        <div>
            <h3>리뷰: {data?.length}개</h3>
            <hr style={{marginTop: '2px'}}/>
                {data?.map((item) => (
                    <Container>
                        <div className={"Box"} onClick={()=>{alert("상세 페이지 개발 중")}}>
                            <Row>
                                <Col><strong>작성자: {item.author}</strong></Col>
                                <Col><div>작성일: {item.created_at.substr(0, 10)}</div></Col>
                                <Row>
                                    <Col>{item.content}</Col>
                                </Row>
                                {/*<hr/>*/}
                            </Row>
                        </div>
                    </Container>
                ))}
        </div>
    );
};

export default Review;