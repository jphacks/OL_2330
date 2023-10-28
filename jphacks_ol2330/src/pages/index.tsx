import { Result } from "./result";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header>
        <h1>ほんびより</h1>
      </header>
      <div class="content">図書館の分類からランダムに本のジャンルをお勧めします。</div>
      <div class="btn_con">
        <a class="random_btn" href="result" role="button">えらぶ</a>
      </div>
    </main>
  )
}