import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
  border-radius: 5px;
  color: ${({ theme }) => theme.COLORS.LIGHT_500};
  display: flex;
  
  width: 100%;
  
  > input {
    background: transparent;
    border: 0;
    border-radius: 1px;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    font-size: 1.6rem;
    font-weight: 400;
    height: 3.8rem;
    padding: 1.2rem 1.4rem;
    width: 100%;
  }
`