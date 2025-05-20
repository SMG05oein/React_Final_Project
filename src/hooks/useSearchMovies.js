import {useQuery} from "@tanstack/react-query";
import api from "../utils/api";

const fetchSearchMovies = (keyword, page) => {
    return keyword? api.get(`search/movie?query=${keyword}&page=${page}?`) : api.get(`movie/popular?page=${page}?language=ko-KR`);
}

export const useSearchMoviesQuery = ({keyword, page}) => {
    return useQuery({
        queryKey: ['movie_search', keyword, page],
        queryFn: () => fetchSearchMovies(keyword, page),
        select: (result)=>result.data
    })
}