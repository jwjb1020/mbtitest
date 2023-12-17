"use client";

import { useEffect, useState } from "react";

export default function Edit(props) {
    let [ details, setDeatils ] = useState('')

    useEffect(() => {
        fetch("/api/post/detail?postId=" + props.params.id)
            .then((response) => response.json())
            .then((result) => setDeatils(result.detailedPost[0])                
            );
    });

    return (
        <div className="edit-page">
            <h4>수정페이지</h4>
            <form action="/api/post/edit" method="POST">
                제목: <input type="text" name="title" defaultValue={details.title}/>
                내용: <input type="text" name="content" defaultValue={details.content}/>
                작성자: <input type="text" name="author" defaultValue={details.author} readOnly/>
                <input style={{display : 'none'}} name="post_id" defaultValue={details.post_id}/>
                <button type="submit">수정</button>
            </form>
        </div>
    );
}
