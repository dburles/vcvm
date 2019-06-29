import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif;
    color: ${props => props.theme.colors.black};
    background: ${props => props.theme.colors.grey[1]};
  }
`;

export default GlobalStyle;
