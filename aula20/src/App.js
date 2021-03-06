import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

import CartProvider from "./context/cart";
import ThemeContext from "./context/theme";

export default function App() {
  return (
    <ThemeContext>

      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </ThemeContext>
  );
}
