import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store from './store';
import { theme } from './styles';
import { Cart } from './components/cart';

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Cart />
      </ThemeProvider>
    </Provider>
  )
}
