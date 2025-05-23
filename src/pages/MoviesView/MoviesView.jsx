import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate, useParams, useSearchParams} from "react-router-dom";
import {Badge, Button, Col, Container, Modal, Row} from "react-bootstrap";
import {useMoviesViewQuery} from "../../hooks/useMovieView";
import "./MoviesView.style.css"
import Review from "./Review/Review";
import RecommendMovie from "./recommend_movie/RecommendMovie";
import {usePreviewQuery} from "../../hooks/usePreView";
import YouTube from "react-youtube";

const MoviesView = () => {
    let {idx} = useParams();

    const [videoIdx, setVideoIdx] = useState(0);
    // const {data, isLoading, isError, error} = useMoviesViewQuery(idx); //<-따로 따로 부르니깐 안 됨
    const {data, isLoading, isError, error} = usePreviewQuery(idx);
    const [videoKey, setVideoKey] = useState(data[1]?.results[videoIdx]?.key);

    useEffect(() => {
        setVideoIdx(0);
    }, []);
    useEffect(() => {
        setVideoKey(data[1]?.results[videoIdx]?.key);
    }, [data[1]?.results[videoIdx]?.key]);

    const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate();

    const opts = {
        // height: '390',
        // width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        }
    }


    if(isLoading) {
        return <h1 className={"loading"}></h1>
    } else {
        return (
            <div>
                <Container >
                    <Row>
                        <Col lg={4}>
                            <div className={'poster_card'}
                            style={{backgroundImage: "url(" + `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${data[0]?.poster_path}` + ")"}}
                            />
                        </Col>
                        <Col lg={8}>
                            <div className={'just_card'}>
                                <div>
                                    {data[0].genres.map((item) => (
                                        <Badge style={{marginRight: '4px'}} bg={"danger"}>{item?.name}</Badge>
                                    ))}
                                </div>
                                <div>
                                    <h1>제목: {data[0].title}</h1>
                                </div>
                                <div className={'just_card_not'}>
                                    <div>평점: {data[0].vote_average}</div>
                                    <div>인기: {data[0].popularity}</div>
                                    <div>18세 여부: {data[0].adult ? "성인물" : "성인물 아님"}</div>
                                </div>
                                <hr></hr>
                                <div>{data[0].overview}</div>
                                <hr></hr>
                                <div>개봉일: {data[0].release_date}</div>
                                <div>기본 언어: {data[0].original_language}</div>
                                <div>상영 시간: {data[0].runtime}분</div>
                                <div>예산: $ {data[0].budget.toLocaleString()}</div>
                                <div>수익: $ {data[0].revenue.toLocaleString()}</div>
                                <Button variant={"primary"} onClick={()=>navigate("/")}>홈으로</Button>
                                <br/>
                                <div>
                                    {!videoIdx === 0 ? "예고편 없음" : <Button className="그거" variant={"outline-info"} onClick={()=>{setShowModal(true)}}>예고편 보기</Button>}
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Review img={data[0]?.poster_path} idx={idx}/>
                    </Row>
                    <hr/>
                    <Row>
                        <RecommendMovie idx={idx}/>
                    </Row>
                </Container>

                <Modal
                    show={showModal}
                    onHide={()=>setShowModal(false)}
                    size="lg"
                    // centered
                    contentClassName="bg-dark text-center text-white"
                >
                    <Modal.Header closeButton closeVariant="white">예고편 총 {data[1].results.length}개</Modal.Header>
                    <Modal.Body>
                        <div className={"Video"}>
                            <div style={{
                                marginRight: '20px',
                                cursor: !(videoIdx === 0) ? "pointer" : "auto",
                                pointerEvents: (videoIdx === 0) ? "none" : "auto"
                            }}
                                onClick={()=>setVideoIdx(videoIdx-1)}>
                                {videoIdx !== 0 ? "이전편" : "없음"}
                            </div>
                            <div className={"YOTUBE"}>
                                <YouTube videoId={videoKey} opts={opts}/>
                            </div>
                            <div style={{
                                marginLeft: '20px',
                                cursor: !(videoIdx === data[1].results.length-1) ? "pointer" : "auto",
                                pointerEvents: (videoIdx === data[1].results.length-1) ? "none" : "auto"
                            }}
                                onClick={()=>setVideoIdx(videoIdx+1)}>
                                {videoIdx !== data[1].results.length-1 ? "다음편" : "없음"}
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
};

export default MoviesView;