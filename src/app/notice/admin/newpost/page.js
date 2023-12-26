"use client";

import { useState } from "react";

export default function Notice() {
    let [title, setTitle] = useState("");
    let [content, setContent] = useState("");

    return (
        <div>
            <h4>공지사항 게시판</h4>
            <div>
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="공지사항 제목"
                />
                <input
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="공지사항 내용"
                />
                <button
                    onClick={() => {
                        fetch("/api/notice/new", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                title: title,
                                content: content,
                            }),
                        })
                            .then((response) => {
                                window.location.href = "/notice/list";
                                response.json();
                            })
                            .then((result) => {
                                if (result.success = true) {
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
