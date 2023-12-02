"use client"
import Link from "next/link";





export default function Navbar(){
    return(
        <nav className={`glow flex items-center font-nanumPen space-x-16`}>
        <Link className="text-white  hover:text-gray-300" href="/">홈</Link>
        <Link className="text-white hover:text-gray-300" href="/list">문제 풀기</Link>
        <Link className="text-white hover:text-gray-300" href="/board">자유게시판</Link>
        <Link className="text-white hover:text-gray-300" href="/announce">공지사항</Link>
        <Link className="text-white hover:text-gray-300" href="/create">문제등록</Link>
        </nav>
    )
}