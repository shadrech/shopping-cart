import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '~test-utils';
import { Cart } from '.';

describe('<Cart />', () => {

  it('renders and displays all items', async () => {
    const { asFragment } = render(<Cart />);
    expect(await screen.findByText(/Toilet Roll/i)).toBeInTheDocument();
    expect(screen.getAllByTestId('cartItem')).toHaveLength(3);
    expect(asFragment()).toMatchSnapshot();
  })

  it('correctly updates item quantity when input changed', async () => {
    render(<Cart />);
    await screen.findAllByText('Pasta'); // wait for page to load

    const element1 = screen.getByText('Toilet Roll').parentElement as Element;
    const element2 = screen.getByText('Pasta').parentElement as Element;
    const element3 = screen.getByText('Eggs').parentElement as Element;

    fireEvent.change(element1.querySelector('input') as Element, {
      target: { value: '2' }
    });
    fireEvent.change(element2.querySelector('input') as Element, {
      target: { value: '1' }
    });
    fireEvent.change(element3.querySelector('input') as Element, {
      target: { value: '1' }
    });

    expect(screen.getByTestId('cartTotal')).toHaveTextContent('$3.39');
  })

  it('correctly updates when clear button clicked', async () => {
    render(<Cart />);
    await screen.findAllByText('Pasta');

    screen.getAllByTestId('cartItem').forEach((item) => {
      fireEvent.change(item.querySelector('input') as Element, {
        target: { value: '1' }
      });
    });

    expect(screen.getByTestId('cartTotal')).toHaveTextContent('$2.09');

    fireEvent.click(screen.getByTestId('clearButton'));

    screen.getAllByTestId('cartItem').forEach((item) => {
      expect(item.querySelector<HTMLInputElement>('input')?.value).toEqual('0');
    });
    expect(screen.getByTestId('cartTotal')).toHaveTextContent('$0.00');
  })

  it('displays error when quantity greater than 3 is typed', async () => {
    render(<Cart />);
    const element = (await screen.findByText('Pasta')).parentElement as HTMLElement;

    fireEvent.change(element.querySelector('input') as Element, {
      target: { value: '6' }
    });
    
    expect(element.querySelector('[data-testid="errorMessage"]')).toHaveTextContent('Max 3 items allowed');
    expect(element.querySelector<HTMLInputElement>('input')?.value).toEqual('0');
  })

  it('correctly deletes an item and updates total', async () => {
    render(<Cart />);
    const element = (await screen.findByText('Pasta')).parentElement as HTMLElement;

    fireEvent.change(element.querySelector('input') as Element, {
      target: { value: '2' }
    });
    fireEvent.click(element.querySelector('button') as Element);

    expect(screen.getAllByTestId('cartItem')).toHaveLength(2);
    expect(screen.queryByText('Pasta')).not.toBeInTheDocument();
    expect(screen.getByTestId('cartTotal')).toHaveTextContent('$0.00');
  })

});
