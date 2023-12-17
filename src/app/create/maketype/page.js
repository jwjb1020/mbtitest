"use client";
import InsertMbtiType from "@/app/components/InsertMbtiType";
import { useState } from "react";

export default function maketype() {
    // mbti에 해당하는 값 입력하고 저장하는 페이지
    const [mbtiValues, setMbtiValues] = useState({});
    console.log(mbtiValues);
    // 타입을 key value 값으로 임시 저장
    const handleMbtiTypeChange = (type, value) => {
        setMbtiValues((prevValues) => ({ ...prevValues, [type]: value }));
    };
    // 16개의 mbti 타입
    const mbtiTypes = [
        "ESTJ",
        "ESTP",
        "ESFJ",
        "ESFP",
        "ENTJ",
        "ENTP",
        "ENFJ",
        "ENFP",
        "ISTJ",
        "ISTP",
        "ISFJ",
        "ISFP",
        "INTJ",
        "INTP",
        "INFJ",
        "INFP",
    ];
    const saveQuestion = () => {
        fetch("/api/testsheet/create/mbtitype", {
            method: "POST",
            body: JSON.stringify(mbtiValues),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.message == "success") {
                }
            });
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow-md">
            {mbtiTypes.map((mbti, idx) => (
                <InsertMbtiType
                    key={idx}
                    type={mbti}
                    onChange={(value) => handleMbtiTypeChange(mbti, value)}
                />
            ))}
            <button
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                onClick={() => saveQuestion()}
            >
                문제 저장
            </button>
        </div>
    );
}
