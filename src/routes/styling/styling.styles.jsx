import styled from "styled-components";

export const StylingContainer = styled.div`
  margin: 6rem 10rem 6rem 10rem;

  @media only screen and (max-width: 800px) {
    margin: 0;
  }

  h1 {
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 4px;
  }
`;
