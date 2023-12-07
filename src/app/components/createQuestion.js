export default function CreateQuestion(){
    // 원하는 기능
    // 1. 순서에 따라 문제 번호 바꾸기
    // 2. input 값 저장
    // 3. input 값에 mbit 값도 저장
    // 4. 이전 다음 버튼
    const nextToCreatQuestion =()=>{
        
    }

    return(
        <div>
            <div>문제 1</div>
            <input type="text" name="answer1" placeholder="답변 1" ></input>
            <input type="text" name="answer2" placeholder="답변 2" ></input>
            
            <button onClick={nextToCreatQuestion}>다음</button>
        </div>
    )
}