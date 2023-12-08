"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function make() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const router = useRouter();

    const saveTitle = () => {
        const titleData = {
            title: title,
            content: content,
            thumbnail: thumbnail,
        };

        fetch(`/api/create/title`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(titleData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.message == "Failed") {
                    alert(data.error);
                    router.push("/login");
                } else if (data.message == "success") {
                    const userId = data.userId;
                    const questionId = data.questionId;
                    console.log(userId, questionId);
                    router.push(
                        `/create/?userId=${userId}&questionId=${questionId}`
                    );
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow-md">
            <input
                type="text"
                name="title"
                placeholder="문제의 타이틀을 입력해주세요."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full mb-4 p-2 border rounded"
            />
            <div className="mb-4">
                <textarea
                    name="content"
                    id="content"
                    placeholder="문제의 설명을 입력해주세요."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full p-2 border rounded"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="thumbnail" className="block text-gray-700">
                    섬네일을 업로드 해주세요
                </label>
                <input
                    type="file"
                    name="thumbnail"
                    id="thumbnail"
                    value={thumbnail}
                    onChange={(e) => setThumbnail(e.target.value)}
                    className="w-full p-2 border rounded"
                />
            </div>
            <button
                onClick={() => saveTitle()}
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
            >
                다음
            </button>
        </div>
    );
}
