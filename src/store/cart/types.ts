export const FETCH_CART = 'cart/FETCH_CART';
export const FETCH_CART_SUCCESS = 'cart/FETCH_CART_SUCCESS';
export const FETCH_CART_ERROR = 'cart/FETCH_CART_ERROR';
export const DELETE_CART_ITEM = 'cart/DELETE_CART_ITEM';
export const UPDATE_ITEM_QUANTITY = 'cart/UPDATE_ITEM_QUANTITY';
export const CLEAR_CART_QUANTITY = 'cart/CLEAR_CART_QUANTITY';

export interface CartItem {
  name: string;
  SKU: string;
  price: number;
  currency: string;
  metadata: object;
  quantity?: number;
}
