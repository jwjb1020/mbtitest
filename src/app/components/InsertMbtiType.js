"use client";
// 부모 컴포넌트에서 props 받아오기
export default function InsertMbtiType({ type, onChange }) {
    // mbti 타입 변수에 저장
    const handleInputChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <div className="flex justify-items-center">
            <p className="text text-center">{type}</p>
            <input
                type="text"
                name="title"
                placeholder="해당 유형의 특징을 입력해주세요."
                onChange={handleInputChange}
                className="w-full mb-4 p-2 border rounded"
            />
        </div>
    );
}
