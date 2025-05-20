import {useQuery} from "@tanstack/react-query";
import api from "../utils/api"


const fetchReview=(id)=>{
    return api.get(`review/${id}`)
}

export const useReviewView = (id) => {
    return useQuery({
        queryKey: ['movie_review_view', id],
        queryFn: ()=>fetchReview(id),
        select:(result)=> result.data,
    })
}