import React from 'react';
import "./GenreFilter.style.css"
import {useMoviesQuery} from "../../../hooks/usseMoviesGenre";

const GenreFilter = ({setG}) => {
    const {data} = useMoviesQuery();
    // console.log(data);
    const handleCheckboxChange = (event, genreId) => {
        if (event.target.checked) {
            setG(prev => [...prev, genreId]); // 체크되면 추가
        } else {
            setG(prev => prev.filter(id => id !== genreId)); // 체크 해제되면 제거
        }
    };
    return (
        <div className="GenreFilter">
            {data?.map((genre) => (
                <div>
                    <input type={"checkbox"} value={genre.name} style={{marginBottom:'10px', marginRight: '5px'}}
                    onChange={(event) => handleCheckboxChange(event, genre.id)}/>
                    {genre.name}
                    <br/>
                </div>
            ))}
        </div>
    );
};

export default GenreFilter;