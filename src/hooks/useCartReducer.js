import { useReducer } from "react";
import { reducer, initialState, CART_ACTIONS_TYPES } from "../reducers/cartReducer";

export const useCartReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (product) =>
        dispatch({ type: CART_ACTIONS_TYPES.ADD_TO_CART, payload: product });

    const subtractFromCart = (product) =>
        dispatch({ type: CART_ACTIONS_TYPES.SUBTRACT_FROM_CART, payload: product });

    const removeFromCart = (product) =>
        dispatch({ type: CART_ACTIONS_TYPES.REMOVE_FROM_CART, payload: product });

    const clearCart = (product) =>
        dispatch({ type: CART_ACTIONS_TYPES.CLEAR_CART, payload: product });

    return { state, addToCart, subtractFromCart, removeFromCart, clearCart };
};