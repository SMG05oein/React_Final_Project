import {useQueries, useQuery} from "@tanstack/react-query";
import api from "../utils/api";

const fetchSearchMovies = (id, str) => {
    // console.log(str);
    return api.get(`movie/${id}${str}`);
}

export const usePreviewQuery = (id) => {
    // const kinds = ['/videos', null];
    const kinds = [null ,'/videos'];


    // return useQuery({
    //     queryKey: ['movie_search',],
    //     queryFn: () => fetchSearchMovies(id),
    //     // select: (result)=>result.data
    // })
    const result =  useQueries({
        queries: kinds.map((kind)=>({
            queryKey: ['movies', kind],
            queryFn: () => fetchSearchMovies(id, kind),
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
    // console.log("USEEE: " ,result);
    return result;
}