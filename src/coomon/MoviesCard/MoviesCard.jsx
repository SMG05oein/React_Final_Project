import React from 'react';
import './MoviesCard.style.css'
import {Badge} from "react-bootstrap";

const MoviesCard = ({movie}) => {
    return (
        <div className={'moviesCard'}
        style={{backgroundImage: "url(" + `https://www.themoviedb.org/t/p/w1066_and_h600_bestv2${movie.poster_path}` + ")"}}
            >
            <div className="overLay">
                <div>
                    <h3>{movie.title}</h3>
                    {movie.genre_ids.map((id) => (
                        <Badge bg={"danger"}>{id}</Badge>
                    ))}
                </div>
                <div>평점: {movie.vote_average}</div>
                <div>{movie.popularty}</div>
                <div>{movie.adult?"성인물" : "성인물 아님"}</div>
            </div>
        </div>
    );
};

export default MoviesCard;