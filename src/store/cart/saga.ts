import { call, put, StrictEffect } from 'redux-saga/effects';
import { cartApi } from '../../api/cart';
import { fetchCartSuccess, fetchCartError } from './actions';

export function* fetchCart(): Generator<StrictEffect, void, any> {
  try {
     const items = yield call(cartApi.fetchCart);
     yield put(fetchCartSuccess({ items }));
  } catch (error) {
     yield put(fetchCartError({ error }));
  }
}
