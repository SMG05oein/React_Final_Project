import {useQuery} from "@tanstack/react-query";
import api from "../utils/api";

const fetchSearchMovies = (id) => {
    return api.get(`movie/${Number(id)}?language=ko-KR`);
}

export const useMoviesViewQuery = (id) => {
    return useQuery({
        queryKey: ['movie_search',],
        queryFn: () => fetchSearchMovies(id),
        select: (result)=>result.data
    })
}