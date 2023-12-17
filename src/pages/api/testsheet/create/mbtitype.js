import pool from "@/db/config";

export default async function handler(req, res) {
    if (req.method == "POST") {
        try {
            //객체로 받기
            const mbtiTypes = JSON.parse(req.body);
            // question_id 추가
            mbtiTypes.question_id = req.cookies.questionId;
            const connectDB = await pool;
            await connectDB.query("insert into mbti_type set ?", [mbtiTypes]);
            res.status(200).json({ message: "success" });
        } catch (error) {
            res.status(400).json({ message: "failed", error: "server error" });
        }
    }
}
