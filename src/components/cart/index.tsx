import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartWrapperDiv, ErrorMessage } from './styles';
import { AppState } from '../../store/reducers';
import { fetchCart } from '../../store/cart/actions';
import { CartItem } from './cart-item';
import { CartSummary } from './cart-summary';

export const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: AppState) => state.cart);
  const itemsArr = useMemo(() => Object.values(items), [items]);

  React.useEffect(() => {
    dispatch(fetchCart());
  }, []);

  return (
    <CartWrapperDiv>
      <section>
        {itemsArr.map(item => <CartItem key={item.SKU} item={item} />)}
        {!itemsArr.length && <ErrorMessage data-testid="errorMessage">There are no items in the basket</ErrorMessage>}
      </section>
      <CartSummary />
    </CartWrapperDiv>
  );
}
