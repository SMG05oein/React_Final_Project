import api from "../utils/api";
import {useQueries, useQuery} from "@tanstack/react-query"


const fetchPopularMovies= (str)=>{
    var strr = str ? str : "popular"
    return api.get(`/movie/${strr}?language=ko-KR`)
}

export const usePopularMoviesQuery = () => {
    const kinds = ['popular', 'top_rated', 'upcoming'];
    // return useQuery({
    //     queryKey: ['moviesPopular'],
    //     queryFn: () => fetchPopularMovies(kinds[0]),
    //     select: (result)=>result.data,
    // })

    const result =  useQueries({
        queries: kinds.map((kind)=>({
            queryKey: ['movies', kind],
            queryFn: () => fetchPopularMovies(kind),
            select: (result)=>result.data,
            retry:3
        })),
        combine: (useResult) => {
            return {
                data: useResult.map((result) => result.data),
                error: useResult.map((result) => result.error),
                isError: useResult.some((result) => result.isError), //하나라도 에러 있으면 진실
                isLoading: useResult.some((result) => result.isLoading),

            }
        },
    })
    console.log("USEEE: " ,result);
    return result;
}