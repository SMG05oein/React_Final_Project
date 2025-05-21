import React, {useMemo, useRef, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import "./Review"

const ReviewContent = ({item, idx}) => {
    console.log("ReviewContent: ",item);

    //그렇다 이건 주석이다 마오주석?
    const [isShowMore, setIsShowMore] = useState(false); // 더보기 열고 닫는 스위치
    const textLimit = useRef(180); //글자수 제한
    // 조건에 따라 게시글을 보여주는 함수 | 모르는 함수?가 많네
    /**FUCK
     * Find
     * Update
     * Create
     * Kill
     * 숙제: Memo가 뭔지 알아보자*/
    const commenter = useMemo(() => {
        const shortReview = item.content.slice(0, textLimit.current); // 원본에서 글자 수만큼 자른 짧은 버전
        if (item.content.length > textLimit.current) {
            // 원본이 길면 (원본 글자수 > 제한된 갯수)
            if (isShowMore) {
                return item.content; // 더보기가 true면 원본 바로 리턴
            }
            return shortReview; // (더보기가 false면) 짧은 버전 리턴
        }
    }, [isShowMore]); // isShowMore의 상태가 바뀔때마다 호출됨

    const navigate = useNavigate();
    return (
        <div>

            <Container>
                <div className={"Box"} onClick={()=>{navigate(`/movies/review/${item.id}/${idx}`)}}>
                    <Row>
                        <Col><strong>작성자: {item.author}</strong></Col>
                        <Col><div>작성일: {item.created_at.substr(0, 10)}</div></Col>
                        <Row>
                            <Col>
                                {/*{item.content}*/}
                                <div>
                                    {commenter}
                                </div>
                            </Col>
                        </Row>
                    </Row>
                </div>
                <a className={"check_text"} onClick={() => setIsShowMore(!isShowMore)}>
                    {item.content.length > textLimit.current && isShowMore ? "[접기]" : "...[더보기]"}
                </a>
            </Container>
        </div>
    );
};

export default ReviewContent;