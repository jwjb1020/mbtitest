import pool from "@/db/config";
import jwt from "jsonwebtoken";
export default async function handler(req, res) {
    try {
        if (req.method == "GET") {
            try {
                const cookies = req.cookies.jwt
                const decodedToken = jwt.verify(cookies, "test")
                const connectDB = await pool;
                const [questionList] = await connectDB.query(
                    "select * from question"
                );
                const list = questionList;
                res.status(200).json({ message: "success", list ,decodedToken });
                
            } catch (error) {
                res.status(404).json({message:"failed", error: "쿼리 잘못됨"})
                
            }
           
           
        }
    } catch (error) {
        res.status(500).json({ message: "failed", error: "sever error" });
    }
}
