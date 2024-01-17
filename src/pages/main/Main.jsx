// CSS
import "./Main.css";

// Components
import Home from "../../components/home/Home";
import Portfolio from "../../components/portfolio/Portfolio";

function Main() {
  return (
    <main className="main">
      <div className="container">
        <Home />
        <Portfolio />
      </div>
    </main>
  );
}

export default Main;
