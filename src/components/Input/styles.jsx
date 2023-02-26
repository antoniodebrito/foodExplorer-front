import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  border-radius: 5px;
  display: flex;
  width: 100%;

  .hasBorder {
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .noHasBorder {
    border: none;
  }
  
  input {
    background: ${({ theme, login }) => login ? "transparent" : theme.COLORS.DARK_800};
    border: none;
    border-radius: 1px;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    font-size: 1.6rem;
    font-weight: 400;
    height: 3.8rem;
    outline: none;
    padding: 1.2rem 1.4rem;
    width: 100%;
    height: 100%;
  }
`