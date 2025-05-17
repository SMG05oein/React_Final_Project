import {useQuery} from "@tanstack/react-query";
import api from "../utils/api"


const fechMovieGenre=()=>{
    return api.get(`genre/movie/list`)
}

export const useMoviesQuery = () => {
    return useQuery({
        queryKey: ['movie_genre'],
        queryFn: fechMovieGenre,
        select:(result)=>result.data.genres,
        staleTime: 600000
    })
}