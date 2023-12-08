"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signup(){
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        nickname: '',
        email: '',
        password: '',
        confirmPassword: '',
        sex: 'male', // 기본값 설정
      });

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

      const handleSignup = (e) => {
        e.preventDefault(); // 폼 제출 방지
    
        try {
          fetch('/api/auth/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          })
          .then(res=>res.json())
          .then(data=>{
            if(data.message == "failed"){
                alert(data.error)
            }
            else if(data.message == "success"){
                alert("회원가입 성공")
                router.push("/login")
            }
          })
        } catch (error) {
          alert(`회원가입 오류 ${error}`);
        }
      };
      
    return(
        <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-md shadow-md">
            <p>회원가입</p>
        <form onSubmit={handleSignup}>
            <div className="mb-4">
                <input
                    type="text"
                    name="name"
                    placeholder="이름을 입력해주세요."
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <input
                    type="text"
                    name="nickname"
                    placeholder="ID를 입력해주세요."
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <input
                    type="email"
                    name="email"
                    placeholder="E-mail을 입력해주세요."
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <input
                    type="password"
                    name="password"
                    placeholder="비밀번호를 입력해주세요."
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="비밀번호를 다시 입력해주세요."
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <input type="radio" name="sex" value="male" onChange={handleInputChange} className="mx-2" /> 남자
                <input type="radio" name="sex" value="female" onChange={handleInputChange} className="mx-2" /> 여자
            </div>

            <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:scale-105">
                회원가입
            </button>
        </form>
    </div>

    )
}