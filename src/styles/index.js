import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  body {
    background-color: #9B65E6;
    font-family: sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialised !important;
  }
`;

export default GlobalStyle;
