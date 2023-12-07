import pool from "@/db/config"

export default async function handler(req,res){
    const questionInfo = req.body;
    console.log(questionInfo)
    const connectDB = await pool;
    await pool.query("insert into question  ")
}