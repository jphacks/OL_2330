import Header from './components/header.tsx';
import Footer from './components/footer.tsx';

export default function Classification() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Header />
        <div class="content">
        </div>
        <div className="space">
      <div className="box_class">
        <br></br>
      <h1>日本十進分類法とは</h1>
          <div className="description">
            <br></br>
          <div className="line">
            「日本十進分類法」とは、日本国内で使用されている図書分類の一つです。この分類法は、図書館や書店などで本や資料を整理・分類するために使用されており、
            日本の国立国会図書館などで一般的に採用されています。日本十進分類法は日本国内の図書館資料の整理とアクセスを容易にするために開発され、日本独自の文化や知識体系に基づいています。
          <br></br>
          <div className="blank">📚</div>
          <br></br>
          <div className="line">この分類法は、数字と文字の組み合わせによって本や資料を分類します。主に10の大分類（0から9までの数字）があり、それぞれの大分類に細分類が設けられています。たとえば、
            0は一般、1は哲学、2は宗教、3は社会科学、4は自然科学、5は工学、6は産業、7は芸術、8は言語、9は文学など、幅広い分野にわたります。</div>
            <br></br>
            <div className="blank">📚</div>
            <br></br>
          <div className="line">日本十進分類法は、日本国内での図書館資料の整理と検索に利用されており、特に図書館利用者にとっては資料の位置を特定しやすくする役割を果たしています。</div>
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
      <Footer />
      </main>
    )
  }