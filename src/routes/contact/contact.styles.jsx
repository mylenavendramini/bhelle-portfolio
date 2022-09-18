import styled from "styled-components";

export const ContactContainer = styled.div`
  background-color: var(--background);
  color: var(--text-primary);
  margin: 6rem 10rem 8rem 10rem;

  @media only screen and (max-width: 1100px) {
    margin: 2rem 5rem 4rem 5rem;
  }

  @media only screen and (max-width: 550px) {
    margin: 1rem;
  }

  h1 {
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 4px;
    margin-bottom: 6rem;
  }
  h2 {
    text-align: justify;
    letter-spacing: 1px;
    font-weight: 1;
  }

  a {
    text-decoration: none;
    font-size: 1.5rem;
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  justify-items: center;

  img {
    width: 100%;
  }
`;
