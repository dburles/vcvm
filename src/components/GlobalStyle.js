import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${props => props.theme.fontFamily.text};
    color: ${props => props.theme.colors.black}
  }
`;

export default GlobalStyle;
