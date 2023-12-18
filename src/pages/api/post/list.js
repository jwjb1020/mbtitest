import pool from "@/db/config";
import jwt from "jsonwebtoken";

export default async function handler(request, response) {
    try {
        if (request.method == "GET") {
            if (request.cookies.jwt) {
                try {
                    // db connection
                    const connectDB = await pool;
                    // ask all of post table's data
                    const [postList] = await connectDB.query(
                        "SELECT * FROM post"
                    );
                    const token = request.cookies.jwt;
                    const decodedToken = jwt.verify(
                        token,
                        process.env.SECRET_KEY
                    );

                    response.status(200).json({
                        success: true,
                        message: "The list of post is well-extracted",
                        postList,
                        decodedToken,
                    });
                } catch (error) {
                    response.status(404).json({
                        success: false,
                        message: "failed",
                        error: "쿼리 잘못됨",
                    });
                }
                // 회원이 아닌 사람들이 사용하는 list
            } else {
                const connectDB = await pool;
                const [postList] = await connectDB.query("SELECT * FROM post");
                response.status(200).json({
                    success: true,
                    message: "The list of post is well-extracted",
                    postList,
                });
            }
        }
    } catch (error) {
        console.error("Failed to get data", error);
        response
            .status(500)
            .json({ success: false, message: "Internal server error" });
    }
}
