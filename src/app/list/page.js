"use client";

import { useEffect, useState } from "react";
import ListCard from "../components/ListCard";

export default function List() {
    const [lists, setLists] = useState([]);
    useEffect(() => {
        fetch("/api/testsheet/show", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.message == "success") {
                    setLists(data.list);
                }
            });
    }, []);

    return (
        <div className="flex flex-wrap gap-3 m-8">
            {lists.map((list, idx) => (
                <ListCard key={idx} data={list} />
            ))}
        </div>
    );
}
