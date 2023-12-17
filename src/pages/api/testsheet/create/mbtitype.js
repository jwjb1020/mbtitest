import pool from "@/db/config";

export default async function handler(req, res) {
    if (req.method == "POST") {
        try {
            //객체로 받기
            const mbtiTypes = JSON.parse(req.body);
            const connectDB = await pool;
            await connectDB.query("insert into mbti_type set ?", [mbtiTypes]);
            res.status(200).JSON({ message: "success" });
        } catch (error) {
            res.status(500).JSON({ message: "failed", error: "server error" });
        }
    }
}
