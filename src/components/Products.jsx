import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { useCart } from "../hooks/useCart";

export default function Products({ products }) {
  const { cart, addToCart, removeFromCart } = useCart();

  const chechItemInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  return (
    <article className="products">
      <ul>
        {products.slice(0, 10).map((product) => {
          const isItemInCart = chechItemInCart(product);
          return (
            <li key={product.id}>
              <img
                src={
                  "https://stores.blackberrys.com/VendorpageTheme/Enterprise/EThemeForBlackberrys/images/product-not-found.jpg"
                }
                alt={product.title}
              />
              <p>
                {product.title}
                <span>{"$" + product.price}</span>
              </p>
              <button
                className={isItemInCart ? "btnRemoveItem" : "btnAddItem"}
                type="button"
                onClick={() =>
                  isItemInCart ? removeFromCart(product) : addToCart(product)
                }
              >
                {isItemInCart ? (
                  <MdOutlineRemoveShoppingCart />
                ) : (
                  <MdOutlineShoppingCart />
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
