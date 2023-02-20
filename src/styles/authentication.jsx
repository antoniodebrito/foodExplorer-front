import styled from "styled-components";

export const Container = styled.main`
  
  .authentication {
    display: grid;
    height: 100vh;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "brand form" ;
    place-content: center;
  }
  
  .authentication-brand {
    align-items: center;
    align-self: center;
    display: flex;
    gap: 2rem;
    grid-area: brand;
    height: 4.8rem;
    justify-content: center;

    img {
        width: 4.9rem;
    }

    h1 {
      font-family: 'Roboto';
      font-size: 4.2rem;
      font-weight: 700;
      line-height: 4.9rem;
    } 
  }

  .authentication-form {
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

  .authentication-form, 
  .authentication-form form {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  .authentication-input {
    display: flex;
    flex-direction: column;
    gap: 8px;

    > label {
      color: ${({theme}) => theme.COLORS.LIGHT_400};
      font-weight: 400;
      line-height: 100%;
    }
  } 

/* RESPONSIVENESS */

  @media (max-width: 980px) {
    display: grid;
    height: 100vh;
    overflow: hidden;
    place-content: center;

    .authentication {
      grid-template-areas: "brand" "form";
      grid-template-columns: 316px;
      height: 40rem;
      margin: 0 auto;
    }

    .authentication-brand {
      margin-bottom: 7rem;

      img {
        width: 4.3rem;
      }
      h1 {
        font-size: 3.7rem;
      }
    }

    .authentication-form {
      justify-self: center;
      width: 100%;
    }
  }
`;
 
