"use client";

import { useRouter } from "next/navigation";

export default function DeleteButton(data) {
    const router = useRouter();


    const boardList = (e) => {
        // console.log(data);
    
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
                // router.refresh()랑 router.push()로 페이지 재랜더링 하는 것에 실패
                // router.push('/board/list')
                // window.location.href로는 재랜더링이 되지만 페이지 전체가 랜더링 되는 것이 싫어서 상기의 이벤트 애니메이션 사용
                // window.location.href='/board/list'
            });
    };
    // 문제풀기 삭제 버튼
    const listDelete = () => {
        // console.log("data",data);
        fetch("/api/testsheet/delete", {
            method: "DELETE",
            body: data.questionId,
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.message == "success") {
                    // 새로고침 
                    location.reload();
                } else {
                    console.log(result.error);
                }
            });
    };
    // 버튼 타입에 따라 다른 함수 실행 코드
    const deleteType = (e) => {
        switch (data.buttonType) {
            case "boardDelete":

                return boardList(e);
               
            case "listDelete":
                return listDelete();

        }
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
