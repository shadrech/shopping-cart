import { createGlobalStyle } from 'styled-components';

type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export const theme = {
  lightGrey: '#b4b4b4',
  textBlack: '#151515',
  primaryOrange: '#e59542',
  primaryBlue: '#6896cc',
  secondaryBlue: '#456d9c',
}

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`
