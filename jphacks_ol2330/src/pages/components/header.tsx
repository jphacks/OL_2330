function Header() {
  return <header>
    <div className="header_component">
        {/* 余裕があったら画像orロゴにしたい */}
        <div className="wrap">
        <b>
        <a className="pagename" href="/">ほんびより</a>
        </b>
        </div>
        <nav>
            <ul className="main_nav">
                <li><c><a href="about_thispage"><div className="about">About</div></a></c></li>
                <li><d><a href="about_classification">日本十進分類法とは</a></d></li>
            </ul>
        </nav>
    </div>
  </header>;
}

export default Header;