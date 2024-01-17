// CSS
import "./Main.css";

// Components
import Home from "../../components/home/Home";
import Service from "../../components/service/Service";
import Portfolio from "../../components/portfolio/Portfolio";

function Main() {
  return (
    <main className="main">
      <Home />
      <Service />
      <Portfolio />
    </main>
  );
}

export default Main;
