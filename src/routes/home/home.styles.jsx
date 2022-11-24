import styled from "styled-components";

export const HomeContainer = styled.div`
  background-color: var(--background);
  color: var(--text-primary);
  margin: 6rem 10rem 6rem 10rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10rem;
  justify-items: center;

  @media only screen and (max-width: 1200px) {
    margin: 2rem 5rem 3rem 5rem;
    gap: 2rem;
  }

  @media only screen and (max-width: 880px) {
    margin: 1rem;
    gap: 1rem;
  }

  #costume {
    @media only screen and (max-width: 700px) {
      left: 20%;
    }

    @media only screen and (max-width: 500px) {
      left: 11%;
    }
  }
  #styling {
    @media only screen and (max-width: 700px) {
      left: 15%;
    }
  }
`;

export const TextWrap = styled.div`
  background-size: cover;
  overflow: hidden;
  position: relative;
`;

export const ImageWrap = styled.div`
  position: relative;

  img {
    width: 100%;
    filter: grayscale(100%);
  }

  h2 {
    position: absolute;
    z-index: 11;
    top: 40%;
    left: 35%;
    width: 100%;
    text-transform: uppercase;
    letter-spacing: 2px;
    background: transparent;
  }

  &:hover img {
    opacity: 0.8;
    filter: grayscale(0%);
    transition: all 0.2s;
  }
`;
