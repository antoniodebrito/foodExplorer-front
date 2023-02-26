import styled from "styled-components";

export const Container = styled.header`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 2.8rem 12.3rem;
  
  .contentBox {
    align-items: center;
    justify-content: space-between;
    width: 112.2rem;
  }

  * {display: flex;}

  .logo {
    align-items: center;
    gap: 1rem;

    > img {
      width: 3rem;
    }

    > h1 {
      font-size: 2.4rem;
    }
  }

  .search {
    width: 58rem;    
  }

  .receipt {
    align-items: center;
    background: ${({theme}) => theme.COLORS.TOMATO_100};
    border-radius: 5px;
    display: flex;
    gap: 8px;
    padding: 1.2rem 3.2rem;
  }
`;

