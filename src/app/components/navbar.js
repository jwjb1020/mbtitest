"use client"
import Link from "next/link";


export default function Navbar(){
    return(
        <nav>
        <Link href="/">홈</Link>
        <Link href="/list">문제 풀기</Link>
        <Link href="/board">자유게시판</Link>
        <Link href="/announce">공지사항</Link>
        <Link href="/create">문제등록</Link>
        </nav>
    )
}