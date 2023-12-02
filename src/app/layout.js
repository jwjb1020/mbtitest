import Image from 'next/image'
import Navbar from './components/navbar'
import './globals.css'
import SignupButton from './components/signupBotton'

export const metadata = {
  title: 'MbtiTest',
  description: 'Mbti 검사를 자유롭게 만드는 사이트',
}

export default function RootLayout({ children }) {
  return (
    <html>
    <body>
      <div className='flex px-4 justify-center relative bg-[#408C3F]'>
        <Image width={70} height={70} alt='logo' src='/logo.png' className='mr-auto'></Image>
        <Navbar/>
        <SignupButton/>
      </div>
      {children}
    </body>
    </html>
  )
}
