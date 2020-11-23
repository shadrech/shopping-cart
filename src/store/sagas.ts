import { takeLatest } from 'redux-saga/effects';

import { FETCH_CART } from './cart/types';
import { fetchCart } from './cart/saga';

export default function* sagas() {
  yield takeLatest(FETCH_CART, fetchCart);
}
