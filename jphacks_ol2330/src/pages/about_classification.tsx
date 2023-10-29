import Header from './components/header.tsx';

export default function Classification() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Header />
        <div class="content">
        </div>
        <div className="space">
      <div className="box_class">
      <h1>日本十進分類法とは</h1>
          <div>せつめい</div>     
      <div className="neko">
      {/* <Image  src={nekoblue} width="300" height="300" alt='logo'/> */}
      </div>
      
      <div className="btn_con">
      {/* <a className="random_btn" href="result" role="button">えらぶ</a> */}
      </div>
      </div>
      </div>
      </main>
    )
  }