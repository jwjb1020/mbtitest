import { getToken } from "next-auth/jwt";
import jwt from "jsonwebtoken";

export async function middleware(request) {
    // const session = await getToken({ req: request });
    // console.log(session);

    // console.log(request.cookies != null)
    if (request.cookies.get("jwt")) {
        const ck = request.cookies.get("jwt").value;
    //     // Next.js의 edge runtime에서 'bcrypto' 모듈이 지원되지 않아서 하기의 코드는 에러가 생김(서버 측에서 유효성 검증(verify) 사용 권장)
    //     // const decodedToken = jwt.verify(ck, process.env.SECRET_KEY);
    //     // decode()는 유효성 검증 없이 디코딩만 하는 함수
        const decodedSessionToken = jwt.decode(ck);

        console.log(decodedSessionToken.role);
    }
}
