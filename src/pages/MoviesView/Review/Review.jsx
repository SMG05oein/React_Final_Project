import React from 'react';
import {useReview} from "../../../hooks/useReview";
import {Col, Container, Row} from "react-bootstrap";

const Review = ({idx}) => {
    const {data, isLoading, isError, error} = useReview(idx);
    console.log("Review", data)

    return (
        <div>
            <h3>리뷰: {data?.length}개</h3>
            <hr style={{marginTop: '2px'}}/>
            <Container>
                {data?.map((item) => (
                    <Row>
                        <Col><strong>작성자: {item.author}</strong></Col>
                        <Col>작성일: {item.created_at.substr(0, 10)}</Col>
                        <Row>
                            <Col>{item.content}</Col>
                        </Row>
                        <hr/>
                    </Row>
                ))}
            </Container>
        </div>
    );
};

export default Review;