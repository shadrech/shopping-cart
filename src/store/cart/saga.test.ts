import { runSaga } from 'redux-saga';
import { cartApi } from '../../api/cart';
import { fetchCart } from './saga';

describe('cart saga', () => {

  beforeEach(jest.clearAllMocks)

  it('yields successful results', async () => {
    const dispatched: any = [];
    jest.spyOn(cartApi, 'fetchCart').mockResolvedValue([
      { hello: 'worlds', SKU: '1' }, { one: 'two', SKU: '2' }
    ]);

    await runSaga({
      dispatch: (action) => dispatched.push(action),
      getState: () => ({}),
    }, fetchCart).toPromise();

    expect(dispatched).toEqual([{
      payload: { items: [{ hello: 'worlds', SKU: '1' }, { one: 'two', SKU: '2' }] },
      type: 'cart/FETCH_CART_SUCCESS'
    }]);
    expect(cartApi.fetchCart).toHaveBeenCalledTimes(1);
  })

  it('yields errors', async () => {
    const dispatched: any = [];
    const error = new Error('Something aint right...');
    jest.spyOn(cartApi, 'fetchCart').mockRejectedValue(error);

    await runSaga({
      dispatch: (action) => dispatched.push(action),
      getState: () => ({}),
    }, fetchCart).toPromise();

    expect(dispatched).toEqual([{
      payload: { error },
      type: 'cart/FETCH_CART_ERROR'
    }]);
    expect(cartApi.fetchCart).toHaveBeenCalledTimes(1);
  })

})
