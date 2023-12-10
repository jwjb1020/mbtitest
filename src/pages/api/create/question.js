import pool from "@/db/config";

export default async function handler(req, res) {
    if (req.method == "POST") {
        try {
            const questionInfo = req.body;
            console.log(questionInfo);
            const questionNumber = questionInfo.questionNumber;
            const question = questionInfo.question;
            const answer1 = questionInfo.answers[0];
            const answer2 = questionInfo.answers[1];
            const user_id = questionInfo.userId;
            const question_id = questionInfo.questionId;
            const connectDB = await pool;
            await connectDB.query(
                "insert into questionDetail (questionnumber, question, answer1, answer2, user_id, question_id) values (?,?,?,?,?,?)",
                [
                    questionNumber,
                    question,
                    answer1,
                    answer2,
                    user_id,
                    question_id,
                ]
            );
            res.status(200).json({message : "success"})
        } catch (error) {
            res.status(500).json({message : "failed", error : "sever error"})
        }
    }
}
