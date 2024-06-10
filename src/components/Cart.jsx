import { IoMdCart } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";
import "../assets/styles/cart.css";
import { useCart } from "../hooks/useCart";
import { FaCartArrowDown } from "react-icons/fa";

function CartProduct({ title, price, quantity, subtractItem, addItem }) {
  return (
    <li>
      <img
        src="https://stores.blackberrys.com/VendorpageTheme/Enterprise/EThemeForBlackberrys/images/product-not-found.jpg"
        alt={title}
      />
      <p>
        {title} <span>${price}</span>
      </p>
      <footer>
        <button type="button" onClick={subtractItem}>
          <GrSubtractCircle />
        </button>
        <small>
          items <span>{quantity}</span>
        </small>
        <button type="button" onClick={addItem}>
          <IoIosAddCircleOutline />
        </button>
      </footer>
    </li>
  );
}

export default function Cart({ cart }) {
  const { addToCart, subtractFromCart, clearCart } = useCart();

  return (
    <>
      <label className="cart-button" htmlFor="cartCheckbox">
        <IoMdCart />
      </label>
      <input id="cartCheckbox" type="checkbox" hidden />

      <aside className="cart">
        <ul>
          {cart.map((product) => (
            <CartProduct
              key={product.id}
              addItem={() => addToCart(product)}
              subtractItem={() => subtractFromCart(product)}
              {...product}
            />
          ))}
        </ul>
        {cart.length > 0 && (
          <button type="button" className="clear-cart" onClick={clearCart}>
            <FaCartArrowDown />
          </button>
        )}
      </aside>
    </>
  );
}
