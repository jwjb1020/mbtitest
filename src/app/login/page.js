export default function Login(){
    return(
        <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-md shadow-md">
        <p>로그인</p>
    <form action="/api/auth/login" method="get">
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
                type="password"
                name="password"
                placeholder="비밀번호를 입력해주세요."
                className="w-full p-2 border border-gray-300 rounded"
                required
            />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:scale-105">
            로그인
        </button>
    </form>
</div>
    )
}