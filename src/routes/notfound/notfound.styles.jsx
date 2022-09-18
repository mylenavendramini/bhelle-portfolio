import styled from "styled-components";

export const NotFoundContainer = styled.div`
  min-height: 90vh;
  padding: 10rem 4rem 10rem 4rem;
  margin: 0 4rem 0 4rem;

  @media only screen and (max-width: 800px) {
    padding: 5rem 0 0 0;
    margin: 0 2rem 0 2rem;
  }

  h3 {
    text-align: justify;
    font-size: 2rem;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  h1 {
    font-size: 1.2rem;
    text-align: justify;
    letter-spacing: 4px;
  }
`;
