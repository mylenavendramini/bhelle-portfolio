import styled from "styled-components";

export const CostumeContainer = styled.div`
  margin: 6rem 10rem 6rem 10rem;

  @media only screen and (max-width: 1200px) {
    margin: 2rem 5rem 3rem 5rem;
  }

  @media only screen and (max-width: 800px) {
    padding: 1rem;
    margin: 0;
  }

  h1 {
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 4px;
  }
`;
