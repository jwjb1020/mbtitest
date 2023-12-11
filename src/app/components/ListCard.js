import Image from "next/image";

export default function ListCard({ data }) {
    // console.log(data)

    return (
        <div className="max-w-sm bg-slate-400 border rounded-lg shadow">
            {data.thumbnail_url ? (
                <Image width={400} height={300} alt="no image" />
            ) : (
                <Image
                    width={400}
                    height={300}
                    alt="no image"
                    src={`/default-image.png`}
                    priority
                />
            )}

            <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    {data.title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 ">
                    {data.content}
                </p>
            </div>
        </div>
    );
}
