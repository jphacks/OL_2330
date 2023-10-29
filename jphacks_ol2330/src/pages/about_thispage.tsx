import Header from './components/header.tsx';

export default function Thispage() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Header />
        <div className="content">
        </div>
        <div className="space">
      <div className="box_about">
      <h1>このページについて</h1>
            <div>説明</div>      
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