// CSS
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav>
          <ul className="nav">
            <li className="active">
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#service">Service</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
