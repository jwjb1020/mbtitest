import pool from "@/db/config";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export default async function handler(req, res) {
    if (req.method == "POST") {
        try {
            const { nickname, password } = req.body;
            const connectDB = await pool;
            const [userInfo] = await connectDB.query(
                "select user_id, name, role, password from user where nickname=? ",
                [nickname]
            );

            // user 정보가 없으면
            if (userInfo == 0) {
                res.status(404).json({ message: "failed", error: "no user" });
            }

            //만약에 user 정보가 있으면
            if (userInfo.length > 0) {
                //저장된 비밀번호
                const storedHashedPassword = userInfo[0].password;
                // 저장된 암호화 된 비밀번호와 일치하는 지 확인
                const passwordMatch = await bcrypt.compare(
                    password,
                    storedHashedPassword
                );
                // 만약에 일치해서 true가 나온다면
                if (passwordMatch) {
                    const user = {
                        userID: userInfo[0].user_id,
                        name: userInfo[0].name,
                        nickname: nickname,
                        role: userInfo[0].role,
                    };
                    const secretKey = "test"; // JWT 시크릿 키
                    const token = jwt.sign(user, secretKey, {
                        expiresIn: "1h",
                    }); // 토큰 만료 시간 설정 (예: 1시간)
                    // 헤더에 jwt값 쿠키로 넣어 전송
                    res.setHeader(
                        "Set-Cookie",
                        `jwt=${token}; Path=/; HttpOnly`
                    );
                    res.status(200).json({ message: "success", user });
                }
                //비밀번호 불일치
                else {
                    res.status(401).json({
                        message: "failed",
                        error: "비밀번호가 다릅니다.",
                    });
                }
            }
        } catch (error) {
            res.status(500).json({ error: `${error}` });
        }
    }
    // 토큰 가져와서 확인하는 코드
    if (req.method == "GET") {
        try {
            // 요청에서 쿠키에서 토큰 가져오기
            const token = req.cookies.jwt;
            if (token) {
                // jwt 토큰이 존재하면 검증
                const decodedToken = jwt.verify(token, "test"); // 여기서 'test'는 JWT 시크릿 키입니다.

                // 검증 성공 시 로그인 상태 전달
                res.status(200).json({ isLoggedIn: true, user: decodedToken });
            } else {
                // jwt 토큰이 없으면 로그아웃 상태 전달
                res.status(400).json({ isLoggedIn: false });
            }
        } catch (error) {
            console.error("Error checking login status:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
