"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function make(){
    const[title, setTitle] = useState("")
    const[content, setContent] = useState("")
    const router = useRouter();

    const saveTitle = ()=>{
        const titleData = {
            title : title,
            content : content,
        }
          
        fetch(`/api/create/title`,{
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(titleData),
        })
        .then((res)=>res.json())
        .then((data)=>{
            if (data.message == "Failed"){
                alert(data.error)
                router.push("/login")
            }

        })
        .catch((error) => {
            console.error("Error:", error);
          });

    }

    return(
        <div>
            <input 
            type="text" 
            name="title"
            placeholder="문제의 타이틀을 입력해주세요."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
             <input 
            type="text" 
            name="content"
            placeholder="문제의 설명을 입력해주세요."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            />
            <button onClick={()=>(saveTitle())}>다음</button>
        </div>
    )
}