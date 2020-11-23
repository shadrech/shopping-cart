import React from 'react';
import { SummarySection, TotalP, BorderlessButton, CheckoutButton } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store/reducers';
import { currencyFormat } from '../../helpers/format';
import { clearCartQuantity } from '../../store/cart/actions';

export const CartSummary: React.FC = () => {
  const dispatch = useDispatch();
  const total = useSelector((state: AppState) => state.cart.total);

  const handleOnClear = () => {
    dispatch(clearCartQuantity());
  };
  const handleOnCheckout = () => {

  };

  return (
    <SummarySection>
      <TotalP>{currencyFormat(total)}</TotalP>
      <BorderlessButton onClick={handleOnClear}>Clear</BorderlessButton>
      <CheckoutButton onClick={handleOnCheckout}>check out &gt;</CheckoutButton>
    </SummarySection>
  );
};
