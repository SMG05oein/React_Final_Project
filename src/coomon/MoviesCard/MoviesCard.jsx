import React from 'react';
import './MoviesCard.style.css'
import {Badge} from "react-bootstrap";
import {useMoviesQuery} from "../../hooks/usseMoviesGenre";
import {useNavigate} from "react-router-dom";

const MoviesCard = ({movie, idx}) => {

    const {data:genreData} = useMoviesQuery();
    // console.log(genreData);

    const navigate = useNavigate();
    const showGenre=(genreIdList)=>{
        if(!genreData) return [];
        else{
            const genreNameList = genreIdList?.map((id)=>{
                const ObjGenre = genreData.find((genre) => genre.id === id);
                return ObjGenre.name;
            })

            return genreNameList
        }


    }
    //1066 600
    return (
        <div className={'moviesCard'} onClick={()=> {
            navigate(`/movies/${movie.id}`);
            window.location.reload();
        }}
        style={{backgroundImage: "url(" + `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` + ")"}}
            >
            <div className="overLay">
                <div>
                    <h3>{movie.title}</h3>
                    {showGenre(movie.genre_ids)?.map((id, index) => (
                        <Badge bg={"danger"} key={index}>{id}</Badge>
                    ))}
                </div>
                <div>평점: {movie.vote_average}</div>
                <div>{movie.popularity}</div>
                <div>{movie.adult?"성인물" : "성인물 아님"}</div>
            </div>
        </div>
    );
};

export default MoviesCard;