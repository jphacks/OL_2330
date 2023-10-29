import Header from './components/header.tsx';
import Footer from './components/footer.tsx';

export default function Thispage() {
    return (
      <main className="overflow-auto flex min-h-screen flex-col items-center justify-between p-24">

        <Header />
        <div className="content">
        </div>
        <div className="space">
      <div className="box_about">
      <h1>このページについて</h1>
          <div className="description">
          <div className="this">
          時に、本との出会いは運命の瞬間。<br></br>その一冊があなたの心を奪い、新たな冒険の扉を開く瞬間が、<br></br>訪れるかもしれません。<br></br><br></br>
          この運命の瞬間を共に楽しむために、<br></br>私たちのウェブアプリ「ほんびより」がここに誕生しました。
          <div className="blank">📚</div>
          <div className="this">「ほんびより」は、日本十進分類法の魔法を使って、<br></br>あなたに運命的な本との出会いをご提供します。<br></br>
          普段は手に取らないような分野の本、<br></br>あなたの興味をくすぐる本、<br></br>それらが「ほんびより」の中で新たな冒険への招待状となっています。</div>
            <div className="blank">📚</div>
          <div className="this">「ほんびより」は、本との運命的な出会いをお手伝いします。<br></br>
          もしかすると、<br></br>あなたの興味を引く分野が<br></br>どこか意外な場所に隠れているかもしれません。<br></br><br></br>未知の知識との運命的な出会いが、あなたをどのような冒険に誘うのか<br></br>わくわくしながら探求してみてください。<br></br>
          新たな章が始まる予感がしていますか？<br></br><br></br>その予感を信じて、「ほんびより」と共に運命の本との出会いを楽しんでください。</div>
          </div>  
          </div>      
      <div className="neko">
      {/* <Image  src={nekoblue} width="300" height="300" alt='logo'/> */}
      </div>
      
      <div className="btn_con">
      {/* <a className="random_btn" href="result" role="button">えらぶ</a> */}
      </div>
      </div>
      </div>
      <Footer/>
      </main>
    )
  }