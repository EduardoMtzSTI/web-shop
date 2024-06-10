import "./App.css";
import Products from "./components/Products";
import { products as productsJSON } from "./mocks/products.json";
import { Header } from "./components/Header";
import { useFilters } from "./hooks/useFilters";
import Cart from "./components/Cart";
import { useCart } from "./hooks/useCart";

function App() {
  const { filterProducts } = useFilters({
    products: productsJSON,
  });
  const { cart } = useCart();

  const filteredProducts = filterProducts(productsJSON);

  return (
    <>
      <Header />
      <Cart cart={cart} />
      <Products products={filteredProducts} />
    </>
  );
}

export default App;
