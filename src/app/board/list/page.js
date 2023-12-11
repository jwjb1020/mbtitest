"use client";

import { useEffect, useState } from "react";
import ListItem from "../../components/ListItem";

export default function List() {

    let [ data, setData ] = useState([])

    useEffect(() => {
        fetch("/api/post/list", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.message == "success") {
                    setData(result.postList)
                }
            });
    }, []);

    return (
        <div>
            <h4>자유게시판</h4>
            <ListItem data={data} />
        </div>
    );
}
