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
    height: 100vh;
  }

  body, input, textarea, button  {
    font-family: 'Roboto';
    font-size: 1.6rem;
  }

  body,
  a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  button {
    cursor: pointer;
  }
`