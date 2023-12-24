"use client";

import Link from "next/link";
import DeleteButton from "./DeleteButton";
import { useEffect, useState } from "react";
import EditButton from "./EditButton";

export default function ListItem({ data }) {
    const [loginUser, setLoginUser] = useState("");

    // 서버에서 jwt토큰의 정보를 받아오기 위한 요청
    useEffect(() => {
        fetch("/api/post/list")
            .then((response) => response.json())
            .then((result) => {
                if (result.success && result.decodedToken) {
                    setLoginUser(result.decodedToken.userID);
                }
            });
    }, []);

    // console.log(data)
    return (
        <div>            
            {data.map((item, i) => {
                return (
                    <div className="list-item" key={i}>
                        <Link href={`/board/detail/${data[i].post_id}`}>
                            <h4>{data[i].title}</h4>
                        </Link>
                        {/* 로그인 유저에 따라 수정/삭제 버튼의 유무 표시하기 위해 삼항연산자를 활용*/}
                        {loginUser == data[i].user_id ? (
                            <div className="list-button">
                                <Link
                                    // rel="preload"
                                    className="text-white bg-blue-700 hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
                                    href={`/board/edit/${data[i].post_id}`}
                                >
                                    수정 ✏️
                                </Link>                          
                                <DeleteButton
                                    buttonType={"boardDelete"}
                                    data={data}
                                    i={i}
                                />
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
