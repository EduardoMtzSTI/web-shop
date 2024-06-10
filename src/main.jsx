import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FiltersProvider } from "./contexts/FiltersContexts.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FiltersProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </FiltersProvider>
);
