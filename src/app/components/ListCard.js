"use client";
import Image from "next/image";
import StartButton from "./StartButton";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import { useEffect, useState } from "react";

export default function ListCard({ data }) {
    //로그인된 회원 정보 맞추기
    const [loginedUser, setLoginedUser] = useState("");
    useEffect(() => {
        fetch("/api/testsheet/show")
            .then((res) => res.json())
            .then((result) => {
                if ((result.message = "success")) {
                    // 서버측에서 쿠키에 있는 로그인된 유저 정보 가지고 오기
                    setLoginedUser(result.decodedToken);
                }
            });
    }, []);
    // 로그인 된 유저 아이디
    const userId = loginedUser.userID;
    console.log(userId);

    // 문제를 작성한 유저 아이디
    const listUserId = data.user_id;
    console.log(listUserId);

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
                <StartButton quesitonId={data.quesiton_id} />
                {userId == listUserId ? (
                    <>
                        <DeleteButton quesitonId={data.quesiton_id} />
                        <EditButton quesiton_id={data.quesiton_id} />
                    </>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}
