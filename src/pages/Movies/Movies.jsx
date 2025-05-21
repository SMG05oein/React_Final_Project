import React, {useState} from 'react';
import {useSearchMoviesQuery} from "../../hooks/useSearchMovies";
import {useSearchParams} from "react-router-dom";
import "./Movies.style.css"
import {Alert, Col, Container, Row} from "react-bootstrap";
import MoviesCard from "../../coomon/MoviesCard/MoviesCard";
import {responsive} from "../../constants/responsive";
import ReactPaginate from "react-paginate";

const Movies = () => {
    const [query, setQuery] = useSearchParams()
    const keyword = query.get('q');
    const [page, setPage] = useState(1);
    const {data, isLoading, isError, error} = useSearchMoviesQuery({keyword, page})

    // console.log("Movies: ",data);

    const handlePageClick=({selected})=>{
        setPage(selected+1);
    }

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
                        <Row className="justify-content-center">
                            {data?.results.map((movie, index)=>
                                <Col key={index} lg={4} md={6} xs={8}>
                                    <MoviesCard movie={movie} responsive={responsive}/>
                                </Col>)}
                        </Row>
                        <ReactPaginate
                            nextLabel="next >"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={3}
                            marginPagesDisplayed={2}
                            pageCount={data?.total_pages}
                            previousLabel="< previous"
                            pageClassName="page-item"
                            pageLinkClassName="page-link"
                            previousClassName="page-item"
                            previousLinkClassName="page-link"
                            nextClassName="page-item"
                            nextLinkClassName="page-link"
                            breakLabel="..."
                            breakClassName="page-item"
                            breakLinkClassName="page-link"
                            containerClassName="pagination"
                            activeClassName="active"
                            renderOnZeroPageCount={null}
                            forcePage={page-1}
                        />
                    </Col>
                </Row>
            </Container>
        );

    }
};

export default Movies;