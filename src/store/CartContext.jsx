import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

//  Reducer function as an input
function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    //... Update the state to add a meal item
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];

    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === " REMOVE_ITEM") {
    //... Remove an item from the state
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
  }

  return state;
}

export function CartContextProvider({ children }) {
  useReducer(cartReducer, {
    items: [],
  });
  return <CartContext.Provider>{children}</CartContext.Provider>;
}

export default CartContext;
