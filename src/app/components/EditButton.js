export default function EditButton(quesitonId) {
    const editType = () => {
        console.log("editButton test")
    };
    return (
        <button
            className="text-white bg-blue-300 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
            onClick={(e) => editType(e)}
        >
            수정 ✏️
        </button>
    );
}