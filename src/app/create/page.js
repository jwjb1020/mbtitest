"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Create() {
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [question, setQuestion] = useState("");
    const [answer1, setAnswer1] = useState("");
    const [answer2, setAnswer2] = useState("");
    // 문제 번호에 따라 바뀌는 mbti 타입
    const [mbtiType1, setMbtiType1] = useState("E");
    const [mbtiType2, setMbtiType2] = useState("I");
    // url의 파라미터 값 가져오기
    const params = useSearchParams();
    const router = useRouter();

    const nextToCreatQuestion = () => {
        //get으로 각각해당하는 값 가져오기
        const userId = params.get("userId");
        const questionId = params.get("questionId");

        // 데이터 보내기 전 준비
        const questionData = {
            questionNumber: currentQuestion,
            question: question,
            answers: [answer1, answer2],
            userId: userId,
            questionId: questionId,
            mbtiTypes: [mbtiType1, mbtiType2],
        };
        if (currentQuestion == 12) {
            router.push("/");
            return;
        }
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
                    setCurrentQuestion(currentQuestion + 1);
                    // alert("저장성공");
                    // 데이터 초기화
                    setQuestion("");
                    setAnswer1("");
                    setAnswer2("");
                    // 문제가 바뀔때마다 mbti 타입 변경
                    switch (currentQuestion) {
                        case 3:
                            setMbtiType1("N");
                            setMbtiType2("S");
                            break;

                        case 6:
                            setMbtiType1("F");
                            setMbtiType2("T");
                            break;
                        case 9:
                            setMbtiType1("P");
                            setMbtiType2("J");
                            break;
                    }
                } else {
                    console.log(data.error);
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
            <div className="text-2xl mb-4">{currentQuestion} 문제</div>
            <input
                className="w-full py-2 px-4 mb-4 border border-gray-300 rounded"
                type="text"
                name="question"
                placeholder="문제를 입력해주세요."
                value={question}
                required
                onChange={(e) => setQuestion(e.target.value)}
            />
            <hr className="h-1 mb-4" />
            <p>{mbtiType1}유형 답변</p>
            <input
                className="w-full py-2 px-4 mb-4 border border-gray-300 rounded"
                type="text"
                name="answer1"
                placeholder="답변 1"
                value={answer1}
                required
                onChange={(e) => setAnswer1(e.target.value)}
            />
             <p>{mbtiType2}유형 답변</p>
            <input
                className="w-full py-2 px-4 mb-4 border border-gray-300 rounded"
                type="text"
                name="answer2"
                placeholder="답변 2"
                value={answer2}
                required
                onChange={(e) => setAnswer2(e.target.value)}
            />
            

            <button
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                onClick={() => nextToCreatQuestion()}
            >
                다음
            </button>
        </div>
    );
}
