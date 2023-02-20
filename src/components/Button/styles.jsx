import styled from "styled-components";

export const Container = styled.button`
  background: ${({theme}) => theme.COLORS.TOMATO_100};
  border: 0;
  border-radius: 5px;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 1.4rem;
  font-weight: 500;
  height: 4.8rem;
  line-height: 2.4rem;
  padding: 1.2rem 3.2rem;
  width: 100%;
`