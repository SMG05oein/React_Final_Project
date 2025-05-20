import React from 'react';
import {useNavigate, useNavigation, useParams} from "react-router-dom";
import {useReviewView} from "../../../hooks/useReviewView";
import {Button, Col, Container, Row} from "react-bootstrap";
// import "./Review.style.css"
import "./ReviewView.style.css"

const ReviewView = () => {
    let {idx, id} = useParams();
    const {data, isLoading, isError, error} = useReviewView(idx);
    console.log("Review", data)

    const navigation = useNavigate();
    if(isLoading) {
        return <h1 className={"loading"}></h1>
    }else{
        return (
            <div>
                <Container>
                    <Row>
                        <Col lg={12} md={12} sm={12} xs={12}>
                            <div className={"OneRow"}>
                                <div className={"OneOneCol"}>
                                    작성자: {data.author}
                                </div>
                                <div className={"OneTwoAddCol"}>
                                    영화 제목: {data.media_title}
                                </div>
                                <div className={"OneTwoCol"}>
                                    등록일: {data.created_at.substring(0, 10) + " " + data.created_at.substring(11, 16)}
                                    <div className={"OneThrCol"}>
                                        (마지막 수정일: {data.updated_at.substring(0, 10) + " " + data.updated_at.substring(11, 16)})
                                    </div>
                                </div>
                                <div style={{marginLeft: "10px"}}>
                                    <Button variant={"primary"} onClick={()=>navigation(`/movies/${id}`)}>이전</Button>
                                </div>
                            </div>
                        </Col>
                        <hr style={{marginTop:"10px"}}></hr>
                        <Row>
                            <Col lg={12} md={12} sm={12} xs={12}>
                                <div>
                                    s
                                </div>
                            </Col>
                        </Row>
                    </Row>
                </Container>

            </div>
        );
    }
};

export default ReviewView;