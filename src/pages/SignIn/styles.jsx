import styled from "styled-components";

export const Container = styled.main`
  
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "brand form" ;
  place-content: center;
  
  .brand {
    align-items: center;
    border: 1px solid red;
    display: flex;
    gap: 2rem;
    grid-area: brand;
    height: 4.8rem;
    justify-content: center;
    align-self: center;

    h1 {
      font-family: 'Roboto';
      font-size: 4.2rem;
      font-weight: 700;
      line-height: 4.9rem;
    } 
  }

  .form {
    border: 1px solid red;
    grid-area: form;
  }

  

  
`;
 