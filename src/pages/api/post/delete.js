// import { authOptions } from "../auth/[...nextauth]";
import pool from "@/db/config";
import jwt from "jsonwebtoken";

export default async function handler(request, response) {
    if (request.method == "DELETE") {
        // console.log(request.body)
        const cookies = request.cookies.jwt;
        const decodedToken = jwt.verify(cookies, process.env.SECRET_KEY);
        const postId = request.body;

        const connectDB = await pool;
        const [found] = await connectDB.query(
            "SELECT author from post where post_id=?",
            postId
        );

        if (found[0].author == decodedToken.nickname) {
            await connectDB.query(
                "DELETE from post where post_id=?",
                postId
            );
            response.status(200).json({ success: true, message: "Delete complete"})
        } else {
            response.status(500).json({ success: false, message: "User unmatched"})

        }
    }
}
