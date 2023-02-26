import styled from "styled-components";

export const Container = styled.div`

  .banner {
    margin: 0 auto;
    width: 112rem;
    position: relative;

  }

  .banner-back {
    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
    bottom: 0;
    border-radius: 8px;
    height: 26rem;
    position: absolute;
    width: 100%;
    z-index: -10;
  }

  .banner-presentation {
    display: flex;
    align-items: center;
  }

  .banner-text {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    padding-top: 8.8rem;
    > h2 {
      font-family: 'Poppins';
      font-weight: 500;
      font-size: 4rem;
      line-height: 140%;
    }

    > p {
      line-height: 100%;
      font-weight: 400;
    }
  }
`;