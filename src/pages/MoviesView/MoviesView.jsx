import React from 'react';
import {useLocation, useParams, useSearchParams} from "react-router-dom";
import {Badge, Col, Container, Row} from "react-bootstrap";
import {useMoviesViewQuery} from "../../hooks/useMovieView";
import "./MoviesView.style.css"
import {useMoviesQuery} from "../../hooks/usseMoviesGenre";

const MoviesView = () => {
    const location = useLocation();
    const movie = location.state?.movie;
    let {idx} = useParams();
    // console.log(idx);
    const {data, isLoading, isError, error} = useMoviesViewQuery();
    console.log("MMMMMM", movie);

    const {data:genreData} = useMoviesQuery();
    const showGenre=(genreIdList)=>{
        if(!genreData) return [];
        else{
            const genreNameList = genreIdList.map((id)=>{
                const ObjGenre = genreData.find((genre) => genre.id === id);
                return ObjGenre.name;
            })

            return genreNameList
        }


    }
    return (
        <div>
            <Container >
                <Row>
                    <Col lg={5}>
                        <div className={'poster_card'}
                        style={{backgroundImage: "url(" + `https://www.themoviedb.org/t/p/w1066_and_h600_bestv2${movie.poster_path}` + ")"}}
                        />
                    </Col>
                    <Col lg={6}>
                        <div className={'just_card'}>
                            <div>
                                {showGenre(movie.genre_ids).map((id, index) => (
                                    <Badge style={{marginRight: '4px'}} bg={"danger"} key={index}>{id}</Badge>
                                ))}
                            </div>
                            <div>
                                <h1>제목: {movie.title}</h1>
                            </div>
                            <div className={'just_card_not'}>
                                <div>평점: {movie.vote_average}</div>
                                <div>누적 관객: {movie.popularity}</div>
                                <div>18세 여부: {movie.adult ? "성인물" : "성인물 아님"}</div>
                            </div>
                            <hr></hr>
                            <div>{movie.overview}</div>
                            <hr></hr>
                            <div>개봉일: {movie.release_date}</div>
                            <div>기본 언어: {movie.original_language}</div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MoviesView;