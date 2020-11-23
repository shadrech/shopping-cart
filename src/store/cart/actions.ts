import { createAction } from '@reduxjs/toolkit';
import { FETCH_CART, CartItem, FETCH_CART_SUCCESS, DELETE_CART_ITEM, FETCH_CART_ERROR, UPDATE_ITEM_QUANTITY, CLEAR_CART_QUANTITY } from './types';

export const fetchCart = createAction(FETCH_CART);
export const fetchCartSuccess = createAction<{ items: CartItem[] }>(FETCH_CART_SUCCESS);
export const fetchCartError = createAction<{ error: Error }>(FETCH_CART_ERROR);
export const deleteCartItem = createAction<{ sku: string }>(DELETE_CART_ITEM);
export const updateCartItemQty = createAction<{ sku: string, quantity?: number }>(UPDATE_ITEM_QUANTITY);
export const clearCartQuantity = createAction(CLEAR_CART_QUANTITY);
