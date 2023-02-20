import styled from "styled-components";

export const Container = styled.main`
  
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "brand form" ;
  place-content: center;
  
  .brand {
    align-items: center;
    align-self: center;
    display: flex;
    gap: 2rem;
    grid-area: brand;
    height: 4.8rem;
    justify-content: center;

    h1 {
      font-family: 'Roboto';
      font-size: 4.2rem;
      font-weight: 700;
      line-height: 4.9rem;
    } 
  }

  .form {
    grid-area: form;
    width: 47rem;

    h2 {
      font-weight: 500;
      font-size: 3.2rem;
      line-height: 140%;
    }

    h2, p {
      text-align: center;
    }

    p {
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2.4rem;
    }

  }

  .form, 
  .form form {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  .login-input {
    display: flex;
    flex-direction: column;
    gap: 8px;

    > label {
      color: ${({theme}) => theme.COLORS.LIGHT_400};
      font-weight: 400;
      line-height: 100%;
    }
  } 

  
`;
 