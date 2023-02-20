import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;

  }

  html,
  body {
    overflow: hidden;
  }

  body {
    background: ${({theme}) => theme.COLORS.DARK_400};
    border: none;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    font-family: 'Roboto';
    font-size: 1.6rem;
    height: 100vh;
  }
`