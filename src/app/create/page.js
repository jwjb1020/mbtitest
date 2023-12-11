"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Create() {
    const [currentQuestion, setCurrentQuestion] = useState(1);
    // const [userId, setUserId] = useState();
    const [question, setQuestion] = useState("");
    const [answer1, setAnswer1] = useState("");
    const [answer2, setAnswer2] = useState("");
    const params = useSearchParams();

    const nextToCreatQuestion = () => {
        const userId = params.get("userId");
        const questionId = params.get("questionId");
        setCurrentQuestion(currentQuestion + 1);
        // 데이터 보내기 전 준비
        const questionData = {
            questionNumber: currentQuestion,
            question: question,
            answers: [answer1, answer2],
            userId: userId,
            questionId: questionId,
        };

        fetch(`/api/testsheet/create/question`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(questionData),
            credentials: "include",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.message == "success") {
                    alert("저장성공");
                    // 데이터 초기화
                    setQuestion("");
                    setAnswer1("");
                    setAnswer2("");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <div>
            <div>{currentQuestion} 문제</div>
            <input
                type="text"
                name="question"
                placeholder="문제를 입력해주세요."
                value={question}
                required
                onChange={(e) => setQuestion(e.target.value)}
            />
            <input
                type="text"
                name="answer1"
                placeholder="답변 1"
                value={answer1}
                required
                onChange={(e) => setAnswer1(e.target.value)}
            />
            <input
                type="text"
                name="answer2"
                placeholder="답변 2"
                value={answer2}
                required
                onChange={(e) => setAnswer2(e.target.value)}
            />

            <button onClick={() => nextToCreatQuestion()}>다음</button>
        </div>
    );
}
