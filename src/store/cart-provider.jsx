import { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartRecuder = (state, action) => {
  switch (action.type) {
    case 'ADD':
      const newTotalAmount =
        state.totalAmount + action.payload.price * action.payload.amount;

      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );

      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.payload.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.payload);
      }

      return {
        items: updatedItems,
        totalAmount: newTotalAmount,
      };
    case 'REMOVE':
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload,
      );
      const existingItem = state.items[existingItemIndex];
      const updatedTotalAmount = state.totalAmount - existingItem.price;
      let updatedState;
      if (existingItem.amount === 1) {
        updatedState = state.items.filter(
          (item) => item.id !== action.payload,
        );
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
        updatedState = [...state.items];
        updatedState[existingItemIndex] = updatedItem;
      }
      return {
        items: updatedState,
        totalAmount: updatedTotalAmount,
      };

    default:
      return defaultCartState;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(
    cartRecuder,
    defaultCartState,
  );

  const addItemToCart = (item) => {
    dispatchCart({ type: 'ADD', payload: item });
  };

  const removeItemFromCart = (id) => {
    dispatchCart({ type: 'REMOVE', payload: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
