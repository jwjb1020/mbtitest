import pool from "@/db/config";

export default async function handler(req, res) {
    if (req.method == "DELETE") {
        try {
            const questionId = req.body;
            console.log(questionId);
            const connectDB = await pool;
            await connectDB.query(
                "delete from mbti_type where question_id = ?",
                [questionId]
            );
            await connectDB.query(
                "delete from questionDetail where question_id = ?",
                [questionId]
            );
            await connectDB.query(
                "delete from question where question_id = ?",
                [questionId]
            );
            res.status(200).json({ message: "success" });
        } catch (error) {
            res.status(500).json({ message: "failed", error: error });
        }
    }
}
