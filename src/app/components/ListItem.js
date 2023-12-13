"use client";

import Link from "next/link";

export default function ListItem({ data }) {
    return (
        <div>
            {data.map((item, i) => {
                return (
                    <div className="list-item" key={i}>
                        <Link href={`/board/detail/${data[i].post_id}`}>
                            <h4>{data[i].title}</h4>
                        </Link>
                        <Link href={`/board/edit/${data[i].post_id}`}>수정✏️</Link>
                    </div>
                );
            })}
        </div>
    );
}