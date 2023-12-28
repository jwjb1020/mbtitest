"use client";

import DeleteButton from "@/app/components/DeleteButton";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NoticeList() {
    let [data, setData] = useState([]);
    let [isCondition, setIsCondition] = useState([]);

    useEffect(() => {
        fetch("/api/notice/list")
            .then((response) => response.json())
            .then((result) => {
                if ((result.success = true)) {
                    setData(result.noticeList);
                    if (result.decodedToken) {
                        setIsCondition(result.decodedToken);
                    }
                }
            });
    }, []);
    
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
                            {isCondition.role === "ROLE_ADMIN" &&
                            isCondition.userID === data[i].user_id ? (
                                <div className="list-button">
                                    <Link
                                        className="text-white bg-blue-700 hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                                        href={`/notice/admin/edit/${data[i].notice_id}`}
                                    >
                                        수정 ✏️
                                    </Link>
                                    <DeleteButton
                                        buttonType={"noticeDelete"}
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
        </div>
    );
}
