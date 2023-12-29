"use client";

import { useEffect, useState } from "react";

export default function Edit(props) {
    let [details, setDeatils] = useState("");

    useEffect(() => {
        fetch("/api/post/detail?postId=" + props.params.id)
            .then((response) => response.json())
            .then((result) => setDeatils(result.detailedPost[0]));
    });

    return (
        <div className="edit-page">
            <h4>수정페이지</h4>
            <form action="/api/post/edit" method="POST">
                <div className="form-data">
                    제목:{" "}
                    <input
                        type="text"
                        name="title"
                        defaultValue={details.title}
                    />
                </div>
                <div className="form-data">
                    내용:{" "}
                    <input
                        type="text"
                        name="content"
                        defaultValue={details.content}
                    />
                </div>
                <div className="form-data">
                    작성자:{" "}
                    <input
                        type="text"
                        name="author"
                        defaultValue={details.author}
                        readOnly
                    />
                </div>
                <input
                    style={{ display: "none" }}
                    name="post_id"
                    defaultValue={details.post_id}
                />
                <button
                    className="text-white bg-green-700 hover:bg-green-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mr-8"
                    type="submit"
                >
                    수정
                </button>
            </form>
        </div>
    );
}
