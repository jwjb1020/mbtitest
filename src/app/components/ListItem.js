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
                        <div className="list-button">
                        <Link href={`/board/edit/${data[i].post_id}`}>수정✏️</Link>
                        <span onClick={(e) => 
                            fetch('/api/post/delete', {
                                method:"DELETE",
                                body: data[i].post_id
                            })
                            .then((response) => response.json())
                            .then((result) => console.log(result))
                        }>삭제🗑️</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
