// CSS
import "./App.css";

// Images
import homeBg from "./assets/images/home-bg.jpg";

// Components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

// Pages
import Main from "./pages/main/Main";

// React Router DOM
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
  ]);

  return (
    <div className="app">
      <img src={homeBg} className="homeBg" alt="Home Background Image" />
      <div className="blur"></div>
      <Header />
      <RouterProvider router={routes} />
      <Footer />
    </div>
  );
}

export default App;
