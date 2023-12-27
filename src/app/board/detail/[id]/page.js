"use client";

import { useEffect, useState } from "react";

export default function Detail(props) {

    let [details, setDetails] = useState([])

    useEffect(() => {
        fetch("/api/post/detail?postId=" + props.params.id)
            .then((response) => response.json())
            .then((result) => {
                // console.log(result.detailedPost[0]);
                setDetails(result.detailedPost[0])
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
