// CSS
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav>
          <ul className="nav">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Blog</a>
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
