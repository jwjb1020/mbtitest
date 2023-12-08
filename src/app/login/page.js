"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';


export default function Login() {
  const [nickname, setNickname] = useState(""); // nickname 상태 추가
  const [password, setPassword] = useState(""); // password 상태 추가
  const [error, setError] = useState(null);
  const router = useRouter();
  

  const handleLogin = (e) => {
    e.preventDefault();

    fetch("/api/auth/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nickname, password }),
    })
    .then(res => res.json())
    .then(data => {

      if(data.message == "failed"){
        alert("유저 정보가 없습니다.")
      }
      else{
        
        alert(`${data.user.name}님 환영합니다.`)
        router.replace("/")
        
        // router.replace("/") 다음에 일정 시간 후에 새로고침을 실행
        setTimeout(() => {
          window.location.reload();
        }, 200); // 예: 100 밀리초 후에 새로고침
      }
      
    })
    .catch(error => {
      alert(error)
      setError(error || '서버 오류');
    });
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-md shadow-md">
      <p>로그인</p>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <input
            type="text"
            name="nickname"
            placeholder="ID를 입력해주세요."
            className="w-full p-2 border border-gray-300 rounded"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)} // 입력 값 업데이트
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            name="password"
            placeholder="비밀번호를 입력해주세요."
            className="w-full p-2 border border-gray-300 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // 입력 값 업데이트
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:scale-105">
          로그인
        </button>
      </form>
    </div>
  );
}