import React, { ReactElement } from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render as rtlRender } from '@testing-library/react'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga';
import { ThemeProvider } from 'styled-components';
import { reducer } from '../store/reducers';
import sagas from '../store/sagas';
import { theme } from '../styles';

const sagaMiddleware = createSagaMiddleware()

function render(
  ui: ReactElement,
  {
    initialState,
    store = createStore(reducer, initialState, applyMiddleware(sagaMiddleware)),
    ...renderOptions
  } = {} as any
) {
  sagaMiddleware.run(sagas)

  const Wrapper: React.FC = ({ children }) => (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        {children}
      </Provider>;
    </ThemeProvider>
  )
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react'
export { render }
