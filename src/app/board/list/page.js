"use client";

import { useEffect, useState } from "react";
import ListItem from "../../components/ListItem";
import Link from "next/link";

export default function List() {
    let [data, setData] = useState([]);
    let [isLoggedIn, setisLoggedIn] = useState(false);

    useEffect(() => {
        fetch("/api/post/list", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((result) => {
                if ((result.success = true)) {
                    setData(result.postList);
                    if (result.decodedToken) {
                        setisLoggedIn(true);
                    }
                }
            });
    }, []);

    return (
        <div>
            <div className="board-header">
                <h2 className="ml-3">자유게시판</h2>
                {isLoggedIn ? (
                    <Link
                        className="text-white bg-green-700 hover:bg-green-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mr-8"
                        href="/board/newpost"
                    >
                        글쓰기
                    </Link>
                ) : (
                    <></>
                )}
            </div>
            <hr className="bg-green-800 h-0.5"></hr>
            <ListItem data={data} />
        </div>
    );
}
