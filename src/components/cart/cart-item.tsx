import React from 'react';
import { useDispatch } from 'react-redux';
import { CartItem as CartItemType } from '../../store/cart/types';
import { ItemWrapperDiv, NameP, QuantityInput, PriceP, BorderlessButton } from './styles';
import { updateCartItemQty, deleteCartItem } from '../../store/cart/actions';
import { currencyFormat } from '../../helpers/format';

interface Props {
  item: CartItemType;
}

export const CartItem: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatch();

  const handleQtyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateCartItemQty({
      sku: item.SKU,
      quantity: event.target.value.length ? Number(event.target.value) : undefined
    }));
  };

  const handleDelete = () => {
    dispatch(deleteCartItem({ sku: item.SKU }));
  }

  return (
    <ItemWrapperDiv>
      <NameP>{item.name}</NameP>
      <QuantityInput type="number" value={typeof item.quantity === 'number' ? item.quantity : ''} onChange={handleQtyChange} />
      <PriceP>{currencyFormat(item.price)}</PriceP>
      <BorderlessButton onClick={handleDelete}>x</BorderlessButton>
    </ItemWrapperDiv>
  );
};
