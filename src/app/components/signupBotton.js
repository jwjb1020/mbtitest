"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SignupButton() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userInfo, setUserInfo] = useState({});
    const router = useRouter();

    const goSignupPage = () => {
        router.push("/signup");
    };
    const goLoginPage = () => {
        router.push("/login");
    };

    useEffect(() => {
        // 페이지 로드 시에 서버에게 현재 로그인 상태 확인 요청
        fetch("/api/auth/login", {
            method: "GET",
            credentials: "include", // 쿠키를 요청에 포함
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("로그인", data);
                setUserInfo(data);
                const isLoggedIn = data.isLoggedIn;
                setIsLoggedIn(isLoggedIn);
            })
            .catch((error) => {
                console.error("Error fetching login status:", error);
            });
    }, []);

    const handleLogout = () => {
        fetch("/api/auth/logout", {
            method: "GET",
            credentials: "include",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.message == "success") {
                    alert("로그아웃 성공");
                    setIsLoggedIn(data.isLoggedIn);
                    // router.refresh("/")
                    router.push("/");
                }
            });
    };

    return (
        <div className="ml-auto flex justify-center items-center">
            {isLoggedIn ? (
                <div>
                    <a className="px-4 py-2 text-blue-200">
                        {userInfo.user.name}님
                    </a>
                    <a
                        className="mx-1 px-4 py-2 text-white rounded hover:cursor-pointer"
                        onClick={handleLogout}
                    >
                        로그아웃
                    </a>
                </div>
            ) : (
                // 로그아웃 상태일 때 로그인 버튼 렌더링
                <>
                    <a
                        className="mx-1 px-4 py-2 text-white rounded hover:cursor-pointer"
                        onClick={() => goLoginPage()}
                    >
                        로그인
                    </a>
                    <a className="text-white">|</a>
                    <a
                        className="mx-1 px-4 py-2 text-white rounded hover:cursor-pointer"
                        onClick={() => goSignupPage()}
                    >
                        회원가입
                    </a>
                </>
            )}
        </div>
    );
}
