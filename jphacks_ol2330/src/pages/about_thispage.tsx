import Header from './components/header.tsx';

export default function Thispage() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Header />
        <div class="content">
            <h1>このページについて</h1>
            <div>説明</div>
        </div>
      </main>
    )
  }