export default function Signup(){

    return(
        <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-md shadow-md">
            <p>회원가입</p>
        <form action="/api/auth/signup" method="POST">
            <div className="mb-4">
                <input
                    type="text"
                    name="name"
                    placeholder="이름을 입력해주세요."
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <input
                    type="text"
                    name="nickname"
                    placeholder="ID를 입력해주세요."
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <input
                    type="email"
                    name="email"
                    placeholder="E-mail을 입력해주세요."
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <input
                    type="password"
                    name="password"
                    placeholder="비밀번호를 입력해주세요."
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <input
                    type="password"
                    placeholder="비밀번호를 다시 입력해주세요."
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <input type="radio" name="sex" value="male" className="mx-2" /> 남자
                <input type="radio" name="sex" value="female" className="mx-2" /> 여자
            </div>

            <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:scale-105">
                회원가입
            </button>
        </form>
    </div>

    )
}