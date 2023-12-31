"use client";

import { useState } from "react";

export default function Board() {
    let [title, setTitle] = useState("");
    let [content, setContent] = useState("");

    return (
        <div>
            <h4>자유게시판 글 작성</h4>
            <div>
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="글 제목"
                />
                <input
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="글 내용"
                />
                <button
                    onClick={() => {
                        fetch("/api/post/new", {
                            method: "POST",
                            headers: {
                                "Content-Type": "appliication/json",
                            },
                            body: JSON.stringify({
                                title: title,
                                content: content,
                            }),
                        })
                            .then((response) => {
                                window.location.href = "/board/list";
                                response.json();
                            })
                            .then((result) => {
                                if (result.success == true) {
                                    console.log(result.message);
                                } else {
                                    console.log(result.message);
                                }
                            });
                    }}
                >
                    게시물 등록
                </button>
            </div>
        </div>
    );
}
