import { cartApi } from './cart';
const data = require('./itemList.json');

describe('CartApi', () => {

  test('fetchCart() returns correct data', async () => {
    expect(await cartApi.fetchCart()).toEqual(data);
  })

})
