const data = require('./itemList.json');

class CartApi {
  fetchCart(): Promise<object[]> {
    // maybe here use axios. In constructor instantiate a axios instance with default config
    // already set
    return Promise.resolve(data);
  }
}

export const cartApi = new CartApi();
