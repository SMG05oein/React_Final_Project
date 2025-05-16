import api from "../utils/api";
import {useQuery} from "@tanstack/react-query"


const fetchPopularMovies=()=>{
    return api.get(`/movie/popular`)
}

export const usePopularMovies = () => {
    return useQuery({
        queryKey: ['moviesPopular'],
        queryFn: fetchPopularMovies,
        select: (result)=>result.data,
    })
}