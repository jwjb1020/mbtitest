"use client";
import Image from "next/image";
import StartButton from "./StartButton";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import { useEffect, useState } from "react";

export default function ListCard({ data }) {
    // console.log(data)
    //로그인된 회원 정보 맞추기
    const [loginedUser, setLoginedUser] = useState();
    const [userInfo, setUserInfo] = useState([]);
    useEffect(() => {
        fetch("/api/testsheet/show")
            .then((res) => res.json())
            .then((result) => {
                if ((result.message = "success")) {
                    // 서버측에서 쿠키에 있는 로그인된 유저 정보 가지고 오기
                    setLoginedUser(result.decodedToken);
                    setUserInfo(result.userInfo)
                } else {
                    console.log(result.error);
                }
            });
    }, [data]);
    //회원이 아닐때 볼 수 있도록 만들기
    // 로그인 된 유저 아이디
    let userId;
    if (loginedUser != null) {
        userId = loginedUser.userID;
    }

    // 작성자 이름 알려주는 코드 
    let name
    const test = userInfo.map((user)=>{
    if(user.user_id == data.user_id){
        name= user.name

    }}
    )

    // 문제를 작성한 유저 아이디
    const listUserId = data.user_id;
    

    return (
        <div className="max-w-sm bg-slate-400 border rounded-lg shadow">
            {data.thumbnail_url ? (
                <Image width={400} height={300} alt="no image" />
            ) : (
                <Image
                    width={400}
                    height={300}
                    alt="no image"
                    src={`/default-image.png`}
                    priority
                />
            )}

            <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    {data.title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 ">
                    {data.content}
                </p>
                <p className="mb-3 font-normal text-gray-700 ">
                    작성자 : {name}
                </p>
                <StartButton questionId={data.question_id} />
                {loginedUser && userId === listUserId && (
                    <>
                        <DeleteButton buttonType={"listDelete"} questionId={data.question_id} />
                        <EditButton quesiton_id={data.quesiton_id} />
                    </>
                )}
            </div>
        </div>
    );
}
