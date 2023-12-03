"use client"

import { useRouter } from "next/navigation"

export default function SignupButton(){
    const router = useRouter();
    const goSignupPage =()=>{
        router.push("/signup")

    }
    const goLoginPage =()=>{
        router.push("/login")
    }
    return(
        <div className="ml-auto flex justify-center items-center">
        <a 
            className="mx-1 px-4 py-2  text-white rounded hover:cursor-pointer"
            onClick={() => goLoginPage()}
        >
            로그인
        </a>
        <a className="text-white">|</a>
        <a 
            className="mx-1 px-4 py-2  text-white rounded hover:cursor-pointer"
            onClick={() => goSignupPage()}
        >
            회원가입
        </a>
    </div>
    )
}