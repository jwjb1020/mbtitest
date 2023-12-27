"use client";

import { useEffect, useState } from "react";

export default function Edit(props) {
    let [details, setDetails] = useState([]);

    useEffect(() => {
        fetch("/api/notice/detail?noticeId=" + props.params.id)
            .then((response) => response.json())
            .then((result) => setDetails(result.detailedNotice[0]));
    }, []);

    return (
        <div className="edit-page">
            <h4>공지시항 수정 페이지</h4>
            <form action="/api/notice/edit" method="POST">
                제목 :{" "}
                <input type="text" name="title" defaultValue={details.title} />
                내용 :{" "}
                <input
                    type="text"
                    name="content"
                    defaultValue={details.content}
                />
                작성자 :{" "}
                <input
                    type="text"
                    name="author"
                    defaultValue={details.author}
                    readOnly
                />
                <input style={{display: 'none'}} name="notice_id" defaultValue={details.notice_id} />
                <button type="submit">수정</button>
            </form>
        </div>
    );
}
