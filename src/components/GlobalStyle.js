import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${props => props.theme.fontFamily.text};
    color: ${props => props.theme.colors.black};
    background: ${props => props.theme.colors.grey[1]};
  }
`;

export default GlobalStyle;
