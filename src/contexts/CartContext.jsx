import { createContext } from "react";
import { useCartReducer } from "../hooks/useCartReducer";

//crear contexto
export const CartContext = createContext();

//crear provider
export const CartProvider = ({ children }) => {
  const { state, addToCart, subtractFromCart, removeFromCart, clearCart } =
    useCartReducer();
  /* SIN REDUCER
  const [cart, setCart] = useState([]);

  const addItem = (product) => {
    const itemIndex = cart.findIndex((item) => item.id === product.id);

    if (itemIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart[itemIndex].quantity += 1;
      setCart(newCart);
      return;
    }

    setCart((prevState) => [
      ...prevState,
      {
        ...product,
        quantity: 1,
      },
    ]);
  };

  const subtractItem = (product) => {
    const itemIndex = cart.findIndex((item) => item.id === product.id);
    const newCart = structuredClone(cart);
    const newQuantity = (newCart[itemIndex].quantity -= 1);

    if (newQuantity > 0) {
      newCart[itemIndex].quantity = newQuantity;
      setCart(newCart);
    } else {
      newCart.splice(itemIndex, 1);
      setCart(newCart);
    }
  };

  const removeItem = (product) => {
    setCart((prevState) => prevState.filter((item) => item.id !== product.id));
  };

  const clearItems = () => setCart([]);
*/
  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        subtractFromCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
