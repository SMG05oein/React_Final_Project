import React from 'react';
import api from "../../utils/api";
import {useQueries} from "@tanstack/react-query";
import {usePopularMoviesQuery} from "../../hooks/usePopularMovies";

const DevTest = () => {

    // const fetchPopularMovies= async (str)=>{
    //     // var strr = str ? str : "popular"
    //     return await api.get(`/movie/${str}`)
    // }
    // const kinds = ['popular', 'top_rated', 'upcoming'];
    // const {data} = useQueries({
    //         queries: kinds.map((kind)=>({
    //             queryKey: ['movies', kind],
    //             queryFn: () => fetchPopularMovies(kind),
    //             select: (result)=>result.data,
    //         })),
    //         combine: (useResult) => {
    //             return {
    //             data: useResult.map((result) => result.data)
    //             }
    //         },
    //     })
    // console.log(data[0])

    const qq = usePopularMoviesQuery()

    console.log("qqqqq", qq.data)
    return (
        <div>s</div>
        // <div style={{display:"flex", justifyContent:"center"}}>
        //     {data?.map((data)=>(
        //         <div>{data?.results.map((result)=>(
        //             <div>{result.title}</div>
        //         ))}</div>
        //     ))}
        // </div>
    );
};

export default DevTest;