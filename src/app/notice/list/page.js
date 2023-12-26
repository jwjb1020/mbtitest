"use client";

import { useEffect, useState } from "react";

export default function NoticeList() {
    let [data, setData] = useState([]);
    let [isAdmin, setIsAdmin] = useState([]);

    useEffect(() => {
        fetch("/api/notice/list")
            .then((response) => response.json())
            .then((result) => {
                if ((result.success = true)) {
                    setData(result.noticeList);
                }
            });
    }, []);

    return (
        <div>
            <div className="notice-header">
                <h2>공지사항</h2>
            </div>
        </div>
    );
}
