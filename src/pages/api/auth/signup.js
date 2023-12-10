import pool from "@/db/config";
//비밀번호 암호화 라이브러리
import bcrypt from "bcrypt"


export default async function handler(req,res){
    // 예외처리
    try {
        console.log(req.body)
        //역할과 가입시간 추가
        const {role, date} = {role : "member", date: new Date()};
        const {name, nickname, email, password,confirmPassword,sex} = req.body;
        
        // 패스워드 암호화
        const hashedPassword = await bcrypt.hash(password, 10);
        //db연결
        const connectDB = await pool;

        // 아이디체크
        const [check] = await connectDB.query("SELECT * FROM user WHERE nickname=?", [nickname]);
        
        // 패스워드 일치 체크
        if(password != confirmPassword){
            res.status(404).json({message: "failed", error : "패스워드 불일치"})
        }

        //똑같은 아이디 있으면 안됨
        else if (check.length > 0) {
            // 에러메세지
            res.status(400).json({message : "failed", error : "아이디 중복"})
        } else {
            // Db에 유저 정보 넣기
            await connectDB.query("INSERT INTO user (email, name, nickname, password, sex, role, date) VALUES (?, ?, ?, ?, ?, ?, ?)", [email, name, nickname, hashedPassword, sex, role, date]);
           // 회원가입 성공 후 클라이언트로 리다이렉션
           res.status(200).json({message: "success"})
            // res.writeHead(302, { Location: '/login' });
            // res.end();
        }
    } catch (error) {
        console.error("Error in signup handler:", error);
        res.status(500).json({ error: "서버 오류" });
    }
    
    

    
}