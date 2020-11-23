import { StateFromReducersMapObject, combineReducers } from 'redux';
import { cartReducer } from './cart/reducer';

const reducersObj = {
  cart: cartReducer
};

export const reducer = combineReducers(reducersObj);

export type AppState = StateFromReducersMapObject<typeof reducersObj>;
