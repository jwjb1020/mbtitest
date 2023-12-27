"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NoticeList() {
    let [data, setData] = useState([]);
    let [isAdmin, setIsAdmin] = useState([]);

    useEffect(() => {
        fetch("/api/notice/list")
            .then((response) => response.json())
            .then((result) => {
                if ((result.success = true)) {
                    console.log(result.noticeList);
                    setData(result.noticeList);
                    if (result.decodedToken) {
                        setIsAdmin(result.decodedToken.role);
                    }
                }
            });
    }, []);
    // console.log("data = " + data[0].author);
    // console.log("isAdmin = " + isAdmin);

    return (
        <div>
            <div className="notice-header">
                <h2>공지사항</h2>
            </div>
            <div>
                {data.map((item, i) => {
                    return (
                        <div className="notice-list" key={i}>
                            <Link href={`/notice/detail/${data[i].notice_id}`}>
                                <h4>{data[i].title}</h4>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
