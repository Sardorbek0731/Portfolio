import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav>
          <div className="logo">
            <h3>Sardorbek Olimov</h3>
          </div>
          <ul className="nav">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;