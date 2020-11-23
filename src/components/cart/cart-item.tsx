import React from 'react';
import { useDispatch } from 'react-redux';
import { CartItem as CartItemType } from '../../store/cart/types';
import { ItemWrapperDiv, NameP, QuantityInput, PriceP, BorderlessButton, ErrorMessage } from './styles';
import { updateCartItemQty, deleteCartItem } from '../../store/cart/actions';
import { currencyFormat } from '../../helpers/format';

interface Props {
  item: CartItemType;
}

export const CartItem: React.FC<Props> = ({ item }) => {
  const [error, setError] = React.useState<string>();
  const dispatch = useDispatch();

  const handleQtyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const qty = Number(event.target.value);

    if (qty > 3) {
      setError('Max 3 items allowed');
      return;
    }

    dispatch(updateCartItemQty({
      sku: item.SKU,
      quantity: qty || undefined
    }));
    setError(undefined);
  };

  const handleDelete = () => {
    dispatch(deleteCartItem({ sku: item.SKU }));
  }

  return (
    <ItemWrapperDiv>
      <NameP>{item.name}</NameP>
      <QuantityInput
        type="number"
        value={typeof item.quantity === 'number' ? item.quantity : ''}
        onChange={handleQtyChange}
        $hasError={!!error}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <PriceP>{currencyFormat(item.price)}</PriceP>
      <BorderlessButton onClick={handleDelete}>x</BorderlessButton>
    </ItemWrapperDiv>
  );
};
