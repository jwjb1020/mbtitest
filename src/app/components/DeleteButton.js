export default function DeleteButton(quesitonId) {
    const deleteQuestion = () => {};
    return (
        <button
            className="text-white bg-red-400 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
            onClick={() => deleteQuestion}
        >
            삭제
        </button>
    );
}