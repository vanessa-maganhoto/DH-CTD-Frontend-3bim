import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/home";
import Initial from "./pages/initial";
import Details from "./pages/details";
import NotFound from "./pages/404";

export default function App() {
  return (
    <>
      <BrowserRouter>
      <nav>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/details">Details</Link>
        </li>
      </nav>
        <Routes>
          <Route path="/" element={<Initial />} />
          <Route path="/home" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <footer>
          <span>Todos os direitos reservados</span>
        </footer>
      </BrowserRouter>
    </>
  );
}


