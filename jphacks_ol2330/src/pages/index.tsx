import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header>
        <div>本あります</div>
      </header>
      <div class="con">図書館の分類からランダムに本のジャンルをお勧めします。</div>
      <div class="btn_con">
        <button class="btn" type="button">えらぶ</button>
      </div>
    </main>
  )
}