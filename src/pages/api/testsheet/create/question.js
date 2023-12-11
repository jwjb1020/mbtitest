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
            const mbtiType1 = questionInfo.mbtiTypes[0];
            const mbtiType2 = questionInfo.mbtiTypes[1];
            // if(question.length < 1){
            //     res.status(500).json({message : "failed", error : "빈칸"})
            //     return;
            // }
            const connectDB = await pool;
            await connectDB.query(
                "insert into questionDetail (questionnumber, question, answer1, answer2, mbtiType1, mbtiType2, user_id, question_id) values (?,?,?,?,?,?,?,?)",
                [
                    questionNumber,
                    question,
                    answer1,
                    answer2,
                    mbtiType1,
                    mbtiType2,
                    user_id,
                    question_id,
                ]
            );
            res.status(200).json({ message: "success" });
        } catch (error) {
            res.status(500).json({ message: "failed", error: "db error" });
        }
    }
}
