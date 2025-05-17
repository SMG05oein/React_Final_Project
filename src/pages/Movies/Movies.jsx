import React from 'react';
import {useSearchMoviesQuery} from "../../hooks/useSearchMovies";
import {useSearchParams} from "react-router-dom";
import "./Movies.style.css"
import {Alert, Col, Container, Row} from "react-bootstrap";
import MoviesCard from "../../coomon/MoviesCard/MoviesCard";
import {responsive} from "../../constants/responsive";

const Movies = () => {
    const [query, setQuery] = useSearchParams()
    const keyword = query.get('q');
    const {data, isLoading, isError, error} = useSearchMoviesQuery({keyword})

    console.log("Movies: ",data);

    if (isLoading) {
        return <h1 className={"loading"}></h1>;
    }

    if (isError) {
        return (
            <div>
                <h1>에러 발생...</h1>
                {error? (
                    <Alert variant={"danger"}>에러 메시지: {error?.message}</Alert>
                ) : (
                    <div>에러 원인 찾는 중...</div>
                )}
            </div>
        );
    }else{
        return (
            <Container>
                <Row>
                    <Col lg={4} xs={12}>
                        필터
                    </Col>
                    <Col lg={8} xs={12}>
                        <Row>
                            {data?.results.map((movie, index)=>
                                <Col key={index} lg={4} xs={12}>
                                    <MoviesCard movie={movie} responsive={responsive}/>
                                </Col>)}
                        </Row>
                    </Col>
                </Row>
            </Container>
        );

    }
};

export default Movies;