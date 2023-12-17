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
                        <Link className="text-white bg-blue-700 hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 " href={`/board/edit/${data[i].post_id}`}>수정 ✏️</Link>
                        <span className= "text-white bg-red-600 hover:bg-red-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 " onClick={(e) => 
                            fetch('/api/post/delete', {
                                method:"DELETE",
                                body: data[i].post_id
                            })
                            .then((response) => {
                                if(response.status == 200) {                                    
                                    e.target.closest('.list-item').style.opacity = 0
                                    setTimeout(() => {
                                        e.target.closest('.list-item').style.display = 'none'
                                    }, 1000)
                                    return response.json();
                                } 
                                else if (response.status == 500) {
                                    return response.json()
                                }
                            })
                            .then((result) => console.log(result.message))
                        }>삭제 🗑️</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
