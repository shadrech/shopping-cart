import { cartReducer } from './reducer';

describe('cart reducer', () => {

  it('should return initial state', () => {
    expect(cartReducer(undefined, { type: '' })).toEqual({
      items: {},
      total: 0
    })
  })

  it('should handle "cart/FETCH_CART_SUCCESS"', () => {
    expect(cartReducer(undefined, {
      type: 'cart/FETCH_CART_SUCCESS',
      payload: {
        items: [
          { SKU: 'item1', name: 'Test 1' },
          { SKU: 'item2', name: 'Test 2' },
          { SKU: 'item3', name: 'Test 3' },
        ]
      }
    })).toEqual({
      items: {
        item1: { SKU: 'item1', name: 'Test 1', quantity: 0 },
        item2: { SKU: 'item2', name: 'Test 2', quantity: 0 },
        item3: { SKU: 'item3', name: 'Test 3', quantity: 0 },
      },
      total: 0
    })
  })

  it('should handle "cart/DELETE_CART_ITEM"', () => {
    expect(cartReducer({
      items: {
        item1: { SKU: 'item1', name: 'Test 1', price: 1.5, currency: 'usd', metadata: {}, quantity: 1 },
        item2: { SKU: 'item2', name: 'Test 2', price: 1, currency: 'usd', metadata: {}, quantity: 1 },
      },
      total: 2.5
    }, {
      type: 'cart/DELETE_CART_ITEM',
      payload: { sku: 'item2' }
    })).toEqual({
      items: {
        item1: { SKU: 'item1', name: 'Test 1', price: 1.5, currency: 'usd', metadata: {}, quantity: 1 },
      },
      total: 1.5
    })
  })

  it('should handle "cart/UPDATE_ITEM_QUANTITY"', () => {
    expect(cartReducer({
      items: {
        item1: { SKU: 'item1', name: 'Test 1', price: 1.5, currency: 'usd', metadata: {}, quantity: 1 },
        item2: { SKU: 'item2', name: 'Test 2', price: 1, currency: 'usd', metadata: {}, quantity: 1 },
      },
      total: 2.5
    }, {
      type: 'cart/UPDATE_ITEM_QUANTITY',
      payload: { sku: 'item1', quantity: 3 }
    })).toEqual({
      items: {
        item1: { SKU: 'item1', name: 'Test 1', price: 1.5, currency: 'usd', metadata: {}, quantity: 3 },
        item2: { SKU: 'item2', name: 'Test 2', price: 1, currency: 'usd', metadata: {}, quantity: 1 },
      },
      total: 5.5
    })
  })

  it('should handle "cart/CLEAR_CART_QUANTITY"', () => {
    expect(cartReducer({
      items: {
        item1: { SKU: 'item1', name: 'Test 1', price: 1.5, currency: 'usd', metadata: {}, quantity: 1 },
        item2: { SKU: 'item2', name: 'Test 2', price: 1, currency: 'usd', metadata: {}, quantity: 3 },
        item3: { SKU: 'item3', name: 'Test 3', price: 12, currency: 'usd', metadata: {}, quantity: 2 },
      },
      total: 2.5
    }, { type: 'cart/CLEAR_CART_QUANTITY' })).toEqual({
      items: {
        item1: expect.objectContaining({ SKU: 'item1', quantity: 0 }),
        item2: expect.objectContaining({ SKU: 'item2', quantity: 0 }),
        item3: expect.objectContaining({ SKU: 'item3', quantity: 0 }),
      },
      total: 0
    })
  })

})
