"use client";

import { useEffect, useState } from "react";

export default function Detail(props) {
    let [details, setDetails] = useState([]);

    useEffect(() => {
        fetch("/api/notice/detail?noticeId=" + props.params.id)
            .then((response) => response.json())
            .then((result) => {
                setDetails(result.detailedNotice[0])
            });
    }, []);

    return (
        <div>
            <h4>상세페이지</h4>
            <h4>{details.title}</h4>
            <p>{details.content}</p>
            <p>{details.author}</p>
        </div>
    );
}
