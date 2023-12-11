'use client'

import { useEffect } from "react"

export default function Deatil(props) {

    console.log(props)

    useEffect(() => {
        fetch('/api/post/detail', {
            method: "GET",
            body: 
        })


    }, [])

    return(
        <div>
            <h4>상세페이지</h4>

        </div>
    )
}