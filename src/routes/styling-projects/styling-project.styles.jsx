import styled from "styled-components";

export const StylingProjectContainer = styled.div`
  padding: 6rem;
  justify-content: center;
  justify-items: center;
  justify-self: center;
  text-align: center;

  @media only screen and (max-width: 800px) {
    margin: 0;
    padding: 1rem;
  }

  h1 {
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 6rem;
    letter-spacing: 4px;
  }

  img {
    width: 80%;
  }

  h2 {
    margin-bottom: 6rem;
    margin-top: 6rem;
    letter-spacing: 2px;
    text-align: justify;
  }
`;

export const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  img {
    width: 100%;
  }

  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
