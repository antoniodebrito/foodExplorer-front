import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
  border-radius: 5px;
  color: ${({ theme }) => theme.COLORS.LIGHT_500};


  display: flex;

  > input {
    height: 3.8rem;
    background: transparent;
    padding: 1.2rem 1.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    border: 0;
    width: 100%;
    border-radius: 1px;
    font-size: 1.6rem;
    font-weight: 400;
  }
`