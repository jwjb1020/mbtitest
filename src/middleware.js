import { getToken } from "next-auth/jwt";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function middleware(request) {
    // cookies에서 가지고 오는건 되는데 왜 jwt Token에서 바로 가지고 오는건 안될까? [...nextauth].js 이거 설정을 안 해서 그런가?
    // const session = await getToken({ req: request });
    // console.log(session);

    // URL 경로가 /notice/admin/:path* 인 경우, 관리자 권한을 가진 사람만 기능 사용 가능
    if (request.nextUrl.pathname.startsWith("/notice/admin")) {
        // admin 권한을 가진 사람만 notice의 기능(list 제외)을 사용할 수 있도록 설정
        if (request.cookies.get("jwt")) {
            const accessToken = request.cookies.get("jwt").value;
            // Next.js의 edge runtime에서 'bcrypto' 모듈이 지원되지 않아서 하기의 코드는 에러가 생김(서버 측에서 유효성 검증(verify) 사용 권장)
            // const decodedToken = jwt.verify(accessToken, process.env.SECRET_KEY);
            // decode()는 유효성 검증 없이 디코딩만 하는 함수
            const decodedSessionToken = jwt.decode(accessToken);
            const role = decodedSessionToken.role;
            // console.log(decodedSessionToken.role);

            if (!role || role !== "ROLE_ADMIN") {
                // alert("페이지 접속 권한이 없습니다");
                return NextResponse.redirect("http://localhost:3000/");
            }
        } else {
            // 토큰이 없는 경우 홈으로 redirect 하는 코드
            return NextResponse.redirect("http://localhost:3000/");
        }
    }
}
