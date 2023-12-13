import pool from "@/db/config";

export default async function handler(request, response) {
    try {
        if(request.method == "POST"){
            const postId = request.body.post_id

            const connectDB = await pool;
            const [result] = await connectDB.query(
                'UPDATE post SET title=?, content=? where post_id=? AND author=?',
                [request.body.title, request.body.content, request.body.post_id, request.body.author]
            )
            response.status(200).redirect(302, "/board/list")
        }

    } catch(error) {
        console.log("Failed to edit post", error)
        response.status(500).json({success : false, message : "Internal server error"})
    }
}