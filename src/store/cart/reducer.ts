import { createReducer } from '@reduxjs/toolkit';
import { fetchCartSuccess, deleteCartItem, updateCartItemQty, clearCartQuantity } from './actions';
import { CartItem } from './types';

const calcTotal = (items: Record<string, CartItem>) => Object.values(items)
  .reduce((total, item) => {
    total += (item.price * (item?.quantity || 0));
    return total;
  }, 0);

interface CartState {
  items: Record<string, CartItem>;
  total: number;
}

export const cartReducer = createReducer({
  items: {},
  total: 0
} as CartState, (builder) => builder
  .addCase(fetchCartSuccess, (state, action) => {
    state.items = action.payload.items.reduce((prev, curr) => {
      Object.assign(prev, { [curr.SKU]: { ...curr, quantity: 0 } })
      return prev;
    }, {});
  })
  .addCase(deleteCartItem, (state, action) => {
    delete state.items[action.payload.sku];
    state.total = calcTotal(state.items);
  })
  .addCase(updateCartItemQty, (state, action) => {
    state.items[action.payload.sku].quantity = action.payload.quantity;

    state.total = calcTotal(state.items);
  })
  .addCase(clearCartQuantity, (state) => {
    for (const key in state.items) {
      state.items[key].quantity = 0;
    }

    state.total = calcTotal(state.items);
  })
)
