import pool from "@/db/config";
import jwt from "jsonwebtoken";

export default async function handler(request, response) {
    try {
        if (request.method == "DELETE") {
            const cookies = request.cookies.jwt;
            const decodedToken = jwt.verify(cookies, process.env.SECRET_KEY);

            const noticeId = request.body;

            const connectDB = await pool;
            const [found] = await connectDB.query(
                "SELECT author from notice where notice_id=?",
                noticeId
            );

            if (found[0].author == decodedToken.nickname) {
                await connectDB.query(
                    "DELETE from notice where notice_id=?",
                    noticeId
                );
                response.status(200).json({ success: true, message: "Delete complete"})
            }
            else {
                response.status(500).json({success: false, message: "User unmated"})
            }
        }
    } catch (error) {
        console.error("Failed to delete notice", error);
        response.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
}
