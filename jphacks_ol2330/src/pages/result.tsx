import Header from './components/header.tsx';
import React from 'react';
import IndexPage from './random';

export default function Result() {
  const MyIndexPage = IndexPage; // IndexPage を変数に代入
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <div className="space">
      <div className="box">
      <div class="content"><MyIndexPage /></div>
      </div>
      </div>
    </main>
  )
}
