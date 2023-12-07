"use client"
import { useEffect, useState } from "react";
import CreateQuestion from "../components/createQuestion";

export default function Create(){
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [question, setQuestion] = useState("");
    const [answer1, setAnswer1] = useState("");
    const [answer2, setAnswer2] = useState("");

    //원하는 기능
    // 1. 문제의 섬네일 넣는 기능
    // 2. 문제와 답을 넣는 페이지
    // 3. 답에 대한 mbti 선택지
    // 4. fetch를 통해 버튼을 누르면 db에 저장되도록
    // 5. 문제는 총 열두개 -> 페이지안에 단계별로 만들 수 있도록
    // 6. 마지막으로 제출을 누르면 로딩중 보이고 문제 작성 완료 보이고 홈으로 갈 수 있도록하기
    
 

    const nextToCreatQuestion = () => {
        // 데이터 보내기 전 준비 
        const questionData = {
            questionNumber : currentQuestion,
            question : question,
            answers : [answer1,answer2],
        };

        
        fetch(`/api/create/question`,{
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(questionData),
        })
        .then((res)=>res.json())
        .then((data)=>{

        })
        .catch((error) => {
            console.error("Error:", error);
          });

        setCurrentQuestion(currentQuestion+1)
        
        // 데이터 초기화
        setQuestion("");
        setAnswer1("");
        setAnswer2("");
    }

    return(
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

      <button onClick={()=>(nextToCreatQuestion())}>다음</button>
    </div>
    )
}