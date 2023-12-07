import { destroyCookie } from 'nookies';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const token = req.cookies.jwt;

      // 만약에 쿠키에 토큰이 있으면 토큰 지우기
      if (token) {
        // 해당 쿠키의 경로와 일치해야 정상적으로 삭제됨
        destroyCookie({ res }, 'jwt', {
          path: '/',
        });
        res.status(200).json({ message: 'success', isLoggedIn: false });
      } else {
        res.status(200).json({ message: 'No token found', isLoggedIn: false });
      }
    } catch (error) {
      console.error('Error removing token:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
