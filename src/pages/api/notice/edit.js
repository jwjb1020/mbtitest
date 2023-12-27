import pool from "@/db/config";

export default async function handler(request, response) {
    try {
        if (request.method == "POST") {
            const connectDB = await pool;
            const [result] = await connectDB.query(
                "UPDATE notice SET title=?, content=? where notice_id=? AND author=?",
                [
                    request.body.title,
                    request.body.content,
                    request.body.notice_id,
                    request.body.author,
                ]
            );
            console.log(result);
            response.status(200).redirect(302, "/notice/list");
        }
    } catch (error) {
        console.log("Failed to edit notice", error);
        response
            .status(500)
            .json({ success: false, message: "Internal server error" });
    }
}
