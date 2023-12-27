import jwt from "jsonwebtoken";
import pool from "@/db/config";

export default async function handler(request, response) {
    if (request.method == "POST") {
        // jwt token 가져오기
        const token = request.cookies.jwt;
        // Decode jwt token
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

        // 클라이언트 측에서 body에 이미 JSON.verify()로 JSON 형식으로 넘겨 줬기 때문에 따로 parsing 할 필요 없음
        // request.body = JSON.parse(request.body)
        
        let newNotice = {
            user_id: decodedToken.userID,
            title: request.body.title,
            content: request.body.content,
            author: decodedToken.nickname,
        };

        // db connection
        const connectDB = await pool;

        try {
            const [result] = await connectDB.query("INSERT INTO notice SET ?", [
                newNotice,
            ]);

            console.log("Notice saved: ", result);
            response
                .status(200)
                .json({ success: true, message: "Post saved successfully" });
        } catch (error) {
            console.log("Error occur while saving post", error);
            response
                .status(500)
                .json({ success: false, message: "Internal Server error" });
        }
    }
}
