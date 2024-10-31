import { useState } from "react";
import Navbar from "./components/layout/navbar/Navbar";
import { FormControlLabel } from "@mui/material";
import { Switch } from "@mui/material";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";
import Cart from "./components/pages/cart/Cart";
import Footer from "./components/layout/footer/Footer";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import Checkout from "./components/pages/checkout/Checkout";
import Notfound from "./components/pages/notFound/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const cambiarModo = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar darkMode={darkMode} />
        <div className={darkMode ? "dark-mode-button" : "mode-button"}>
          <FormControlLabel
            control={<Switch checked={darkMode} onChange={cambiarModo} />}
            label="Cambiar modo"
            className={darkMode ? "dark-style" : "light-style"}
          />
        </div>

        <Routes>
          <Route path="/" element={<ItemListContainer darkMode={darkMode} />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer darkMode={darkMode} />}
          />
          <Route path="/cart" element={<Cart darkMode={darkMode} />} />
          <Route
            path="/itemDetail/:id"
            element={<ItemDetailContainer darkMode={darkMode} />}
          />
          <Route path="/checkout" element={<Checkout darkMode={darkMode} />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
