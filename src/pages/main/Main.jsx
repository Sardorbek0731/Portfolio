// CSS
import "./Main.css";

// Components
import Home from "../../components/home/Home";
import Services from "../../components/services/Services";
import Portfolio from "../../components/portfolio/Portfolio";

function Main() {
  return (
    <main className="main">
      <Home />
      <Services />
      <Portfolio />
    </main>
  );
}

export default Main;
