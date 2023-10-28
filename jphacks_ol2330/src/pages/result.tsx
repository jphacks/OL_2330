import Header from './components/header.tsx';
import React from 'react';
import IndexPage from './random';
import Image from "next/image";
import nekored from 'src/pages/images/nekored.png';

export default function Result() {
  const MyIndexPage = IndexPage; // IndexPage を変数に代入
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <div className="space">
      <div className="box">
      <div class="content">お勧め<MyIndexPage /></div>
      <div className="neko">
      <Image  src={nekored} width="300" height="300" alt='logo'/>
      </div>
      <div>IndexPage</div> 
      <MyIndexPage /> {/* IndexPage コンポーネントをレンダリング */}
      </div>
      </div>
    </main>
  )
}
