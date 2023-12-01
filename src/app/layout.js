import Navbar from './components/navbar'
import './globals.css'

export const metadata = {
  title: 'MbtiTest',
  description: 'Mbti 검사를 자유롭게 만드는 사이트',
}

export default function RootLayout({ children }) {
  return (
    <html>
    <body>
      <Navbar/>
      {children}
    </body>
    </html>
  )
}
