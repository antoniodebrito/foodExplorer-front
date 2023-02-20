import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  body {
    background: ${({theme}) => theme.COLORS.DARK_400};
    border: none;
    box-sizing: border-box;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    font-family: 'Roboto';
    font-size: 1.6rem;
    height: 100vh;
    margin: 0;
    padding: 0;
    text-decoration: none;
    overflow: hidden;
  }
`