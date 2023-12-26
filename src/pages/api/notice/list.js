import pool from "@/db/config";
import jwt from "jsonwebtoken";

export default async function handler(request, response) {
    try {
        if (request.method == "GET") {
            const connectDB = await pool;
            const [noticeList] = await connectDB.query("SELECT * FROM notice");
            // 관리자용 공지사항 토큰 정보를 넘겨줘야 해서 코드 다르게 작성 필요
            if (request.cookies.jwt) {
                try {
                    //클라이언트 측으로 token 정보를 넘겨주기 위해 cookies에서 토큰 정보 추출
                    const token = request.cookies.jwt;
                    // token 암호화 풀기
                    const decodedToken = jwt.verify(
                        token,
                        process.env.SECRET_KEY
                    );                   

                    response.status(200).json({
                        success: true,
                        message: "The list of notice is well-extracted",
                        noticeList,
                        decodedToken,
                    });
                } catch (error) {
                    response.status(404).json({
                        success: false,
                        message: "failed to get notice list",
                        error: "query is wrong",
                    });
                }
                // 관리자가 아닌 사람이 보는 공지사항
            } else {
                try {
                    response.status(200).json({
                        success: true,
                        message: "The list of notice is well-extracted",
                        noticeList,
                    });
                } catch (error) {
                    response.status(500).json({
                        success: false,
                        message: "Internal server error",
                    });
                }
            }
        }
    } catch (error) {
        console.log("Failed to get data", error);
        response
            .status(500)
            .json({ success: false, message: "Internal server error" });
    }
}
