import React, {useMemo, useRef, useState} from 'react';
import {useReview} from "../../../hooks/useReview";
import {Col, Container, Row} from "react-bootstrap";
import './Review.style.css'
import {useNavigate} from "react-router-dom";

const Review = ({idx}) => {
    const {data, isLoading, isError, error} = useReview(idx);
    // console.log("Review", data)

    //그렇다 이건 주석이다 마오주석?
    const [isShowMore, setIsShowMore] = useState(false); // 더보기 열고 닫는 스위치
    const textLimit = useRef(100); //글자수 제한
    const [ItemContent, setItemContent] = useState([]);
    // 조건에 따라 게시글을 보여주는 함수 모르는 함수?가 많네
    /**FUCK
     * Find
     * Update
     * Create
     * Kill*/
    const commenter = useMemo(() => {
        // console.log("asda");

        data?.map((item)=>{
            const shortReview = item.content.slice(0, textLimit.current); // 원본에서 글자 수만큼 자른 짧은 버전
            // console.log(item.content);
            if (item.content.length > textLimit.current) {
                // 원본이 길면 (원본 글자수 > 제한된 갯수)
                if (isShowMore) {
                    return setItemContent((ItemContent)=>[...ItemContent,item.content]); // 더보기가 true면 원본 바로 리턴
                }
                return setItemContent((ItemContent)=>[...ItemContent,shortReview]); // (더보기가 false면) 짧은 버전 리턴
            }
            return setItemContent((ItemContent)=>[...ItemContent,item.content]); // 그렇지않으면 (짧은 글에는) 쓴글 그대로 원본 리턴
        })
        return "오류"
    }, [isShowMore, data]); // isShowMore의 상태가 바뀔때마다 호출됨

    console.log(ItemContent);

    const navigate = useNavigate();
    return (
        <div>
            <h3>리뷰: {data?.length}개</h3>
            <hr style={{marginTop: '2px'}}/>
                {data?.map((item) => (
                    <Container>
                        <div className={"Box"} onClick={()=>{navigate(`/movies/review/${item.id}/${idx}`)}}>
                            <Row>
                                <Col><strong>작성자: {item.author}</strong></Col>
                                <Col><div>작성일: {item.created_at.substr(0, 10)}</div></Col>
                                <Row>
                                    <Col>
                                        {item.content}
                                        <div>
                                            {/*{ItemContent?.map((ia)=>(*/}
                                            {/*    <div>*/}
                                            {/*        {ia}*/}
                                            {/*    </div>*/}
                                            {/*))}*/}
                                        </div>
                                    </Col>
                                </Row>
                            </Row>
                        </div>
                        {/*<div className={"check_text"} onClick={() => setIsShowMore(!isShowMore)}>*/}
                        {/*    {item.content.length > textLimit.current && isShowMore ? "[접기]" : "...[더보기]"}*/}
                        {/*</div>*/}
                    </Container>
                ))}
        </div>
    );
};

export default Review;