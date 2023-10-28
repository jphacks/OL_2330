function Header() {
  return <header>
    <div class="header_component">
        {/* 余裕があったら画像orロゴにしたい */}
        <a href="/">ほんびより</a>
        <nav>
            <ul class="main_nav">
                <li><a href="about_thispage">About</a></li>
                <li><a href="about_classification">日本十進分類法とは</a></li>
            </ul>
        </nav>
    </div>
  </header>;
}

export default Header;