'use client'

import Link from "next/link"

export default function ListItem({ data }) {    
    return (
        <div>
            {
                data.map((item, i) => {
                    return(
                        <div className="list-item" key={i}>
                            <h4>{data[i].title}</h4>
                        </div>
                    )
                })
            }
            
        </div>
    )
}