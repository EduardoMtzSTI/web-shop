export const CART_ACTIONS_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    SUBTRACT_FROM_CART: 'SUBTRACT_FROM_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CLEAR_CART: 'CLEAR_CART'
}

export const initialState = [];

//state=cart action={type:[ADD_TO_CART|REMOVE_FROM_CART|..],payload:product}
export const reducer = (state, action) => {
    const { type: actionType, payload: actionPayload } = action;

    switch (actionType) {
        case CART_ACTIONS_TYPES.ADD_TO_CART: {
            const { id } = actionPayload;
            const itemIndex = state.findIndex((item) => item.id === id);

            if (itemIndex >= 0) {
                /* Opcion mas facil
                const newState = structuredClone(state);
                newState[itemIndex].quantity += 1;
                return newState;
                */
                /* Opcion mas rapida*/
                const newState = [
                    ...state.slice(0, itemIndex),
                    {
                        ...state[itemIndex],
                        quantity: state[itemIndex].quantity + 1
                    },
                    ...state.slice(itemIndex + 1),
                ]
                return newState;
            }

            return [
                ...state,
                {
                    ...actionPayload,
                    quantity: 1,
                },
            ];
        }
        case CART_ACTIONS_TYPES.SUBTRACT_FROM_CART: {
            const { id } = actionPayload;
            const itemIndex = state.findIndex((item) => item.id === id);
            const newState = structuredClone(state);
            const newQuantity = (newState[itemIndex].quantity -= 1);

            if (newQuantity > 0) {
                newState[itemIndex].quantity = newQuantity;
            } else {
                newState.splice(itemIndex, 1);
            }
            return newState;
        }
        case CART_ACTIONS_TYPES.REMOVE_FROM_CART: {
            const { id } = actionPayload;
            return state.filter((item) => item.id !== id);
        }
        case CART_ACTIONS_TYPES.CLEAR_CART: {
            return initialState;
        }
    }
};