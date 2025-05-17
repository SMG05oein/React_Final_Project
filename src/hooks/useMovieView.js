import {useQuery} from "@tanstack/react-query";
import api from "../utils/api";

const fetchSearchMovies = () => {
    return api.get(`movie/popular?`);
}

export const useMoviesViewQuery = () => {
    return useQuery({
        queryKey: ['movie_search',],
        queryFn: () => fetchSearchMovies(),
        select: (result)=>result
    })
}