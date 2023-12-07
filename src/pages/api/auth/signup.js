import pool from "@/db/config";
//비밀번호 암호화 라이브러리
import bcrypt from "bcrypt"
require('dotenv').config();
export default async function handler(req,res){
    // 예외처리
    try {
        console.log(req.body)
        //역할과 가입시간 추가
        const {role, date} = {role : "member", date: new Date()};
        const {name, nickname, email, password,sex} = req.body;
        
        // 패스워드 암호화
        const hashedPassword = await bcrypt.hash(password, 10);
        //db연결
        const connectDB = await pool;

        // 아이디체크
        const [check] = await connectDB.query("SELECT * FROM user WHERE nickname=?", [nickname]);
        
        //만약에 똑같은 이메일 있으면 안됨
        if (check.length > 0) {
            // 에러메세지
            res.status(400).json({ error: "아이디 중복" });
        } else {
            // Db에 유저 정보 넣기
            await connectDB.query("INSERT INTO user (email, name, nickname, password, sex, role, date) VALUES (?, ?, ?, ?, ?, ?, ?)", [email, name, nickname, hashedPassword, sex, role, date]);
            // 정보 반환하기
            res.status(200).json({ message: "회원가입 성공" });
        }
    } catch (error) {
        console.error("Error in signup handler:", error);
        res.status(500).json({ error: "서버 오류" });
    }
    
    

    
}