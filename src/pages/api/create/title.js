import pool from "@/db/config";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
    try {
    
        if (!req.cookies.jwt) {
            res.status(401).json({
                message: "Failed",
                error: "권한이 없습니다.",
            });
        } else {
            // 헤더 쿠키에서 사용자 정보 디코딩
            const decodingJwt = jwt.verify(req.cookies.jwt, "test");
            const user_id = decodingJwt.userID;

            // 문제정보
            const { title, content, thumbnail } = req.body;
            console.log(title, content, thumbnail);
            const connectDB = await pool;
            await connectDB.query("insert into question (user_id, title, content, thumbnail_url) values (?,?,?,?)",[user_id, title, content, thumbnail]);
            res.status(200).json({message: "success"})
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
