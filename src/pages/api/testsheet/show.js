import pool from "@/db/config";
import jwt from "jsonwebtoken";
export default async function handler(req, res) {
    try {
        if (req.method == "GET") {
            if (req.cookies.jwt) {
                try {
                    const cookies = req.cookies.jwt;
                    const decodedToken = jwt.verify(
                        cookies,
                        process.env.SECRET_KEY
                    );
                    const connectDB = await pool;
                    const [questionList] = await connectDB.query(
                        "select * from question"
                    );
                    const list = questionList;
                
                    // db에서 user아이디와 이름 가져오기
                    const [userInfo] = await connectDB.query(
                        "select user_id,name from user"
                    );
                    res.status(200).json({
                        message: "success",
                        list,
                        decodedToken,
                        userInfo
                    });
                } catch (error) {
                    res.status(404).json({
                        message: "failed",
                        error: "쿼리 잘못됨",
                    });
                }
                // 회원이 아닌 사람들이 보는 거 수정
            } else {
                const connectDB = await pool;
                const [questionList] = await connectDB.query(
                    "select * from question"
                );
                const list = questionList;
                // db에서 user아이디와 이름 가져오기
                const [userInfo] = await connectDB.query(
                    "select user_id,name from user"
                );
                
                res.status(200).json({ message: "success", list,userInfo });
            }
        }
    } catch (error) {
        res.status(500).json({ message: "failed", error: "sever error" });
    }
}
