"use client";

import { useRouter } from "next/navigation";

export default function DeleteButton(data) {
    const router = useRouter();

    function boardList() {}
    const boardList2 = (e) => {
        console.log(data);
        fetch("/api/post/delete", {
            method: "DELETE",
            body: data.data[data.i].post_id,
        })
            .then((response) => {
                if (response.status == 200) {
                    e.target.closest(".list-item").style.opacity = 0;
                    setTimeout(() => {
                        e.target.closest(".list-item").style.display = "none";
                    }, 500);
                    return response.json();
                } else if (response.status == 500) {
                    return response.json();
                }
            })
            .then((result) => {
                console.log(result.message);
                // router.push('/board/list')
                // window.location.href='/board/list'
            });
    };
    const deleteType = (e) => {
        switch (data.buttonType) {
            case "boardDelete":
                return boardList2(e);
            case "??":
        }

        console.log("DeleteButton Test");
        console.log(data);
    };
    return (
        <button
            className="text-white bg-red-400 hover:bg-red-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            onClick={(e) => {
                deleteType(e);
            }}
        >
            삭제 🗑️
        </button>
    );
}
