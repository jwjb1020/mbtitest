import pool from "@/db/config";

export default async function handler(req, res) {
    if (req.method == "POST") {
        try {
            const mbtiTypes = JSON.parse(req.body);

            
            
            // console.log(keys,values);
             const connectDB = await pool;
             await connectDB.query("insert into mbti_type set ?",[mbtiTypes])
        } catch (error) {
            console.log(error)
        }
    }
}
