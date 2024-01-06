// CSS
import "./App.css";

// Components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

// Pages
import Home from "./pages/home/Home";

// React Router DOM
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return (
    <div className="App">
      <Header />
      <RouterProvider router={routes} />
      <Footer />
    </div>
  );
}

export default App;
