import React from 'react';
import {useLocation, useNavigate, useParams, useSearchParams} from "react-router-dom";
import {Badge, Button, Col, Container, Row} from "react-bootstrap";
import {useMoviesViewQuery} from "../../hooks/useMovieView";
import "./MoviesView.style.css"
import {useMoviesQuery} from "../../hooks/usseMoviesGenre";
import Review from "./Review/Review";

const MoviesView = () => {
    let {idx} = useParams();
    // console.log(idx);
    const {data, isLoading, isError, error} = useMoviesViewQuery(idx);
    // console.log("MMMMMM", data);

    const navigate = useNavigate();

    if(isLoading) {
        return <h1 className={"loading"}></h1>
    } else {
        return (
            <div>
                <Container >
                    <Row>
                        <Col lg={4}>
                            <div className={'poster_card'}
                            style={{backgroundImage: "url(" + `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${data?.poster_path}` + ")"}}
                            />
                        </Col>
                        <Col lg={8}>
                            <div className={'just_card'}>
                                <div>
                                    {data.genres.map((item) => (
                                        <Badge style={{marginRight: '4px'}} bg={"danger"}>{item?.name}</Badge>
                                    ))}
                                </div>
                                <div>
                                    <h1>제목: {data.title}</h1>
                                </div>
                                <div className={'just_card_not'}>
                                    <div>평점: {data.vote_average}</div>
                                    <div>인기: {data.popularity}</div>
                                    <div>18세 여부: {data.adult ? "성인물" : "성인물 아님"}</div>
                                </div>
                                <hr></hr>
                                <div>{data.overview}</div>
                                <hr></hr>
                                <div>개봉일: {data.release_date}</div>
                                <div>기본 언어: {data.original_language}</div>
                                <div>상영 시간: {data.runtime}분</div>
                                <div>예산: $ {data.budget.toLocaleString()}</div>
                                <div>수익: $ {data.revenue.toLocaleString()}</div>
                                <Button variant={"primary"} onClick={()=>navigate("/")}>홈으로</Button>
                            </div>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Review img={data?.poster_path} idx={idx}/>
                    </Row>
                </Container>
            </div>
        );
    }
};

export default MoviesView;