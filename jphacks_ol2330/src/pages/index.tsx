import { Result } from "./result";
import Header from './components/header.tsx';
import Footer from './components/footer.tsx';
import Image from "next/image";
import nekoblue from 'src/pages/images/nekoblue.png';

// import neko1 from './images/neko1.png';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <div className="space">
      <div className="box">
      <div className="content">図書館の分類からランダムに本のジャンルをお勧めします。</div>
      
      <div className="neko">
      <Image  src={nekoblue} width="300" height="300" alt='logo'/>
      </div>
      
      <div className="btn_con">
      <a className="random_btn" href="result" role="button">えらぶ</a>
      </div>
      </div>
      </div>
      <Footer />
    </main>
  )
}