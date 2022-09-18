import styled from "styled-components";

export const StylingContainer = styled.div`
  background-color: var(--background);
  color: var(--text-primary);
  margin: 6rem 10rem 8rem 10rem;

  @media only screen and (max-width: 800px) {
    margin: 0;
  }

  h1 {
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 4px;
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  justify-items: center;
  margin-top: 6rem;

  img {
    width: 100%;
  }
`;
