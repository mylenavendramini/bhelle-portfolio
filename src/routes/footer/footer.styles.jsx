import styled from "styled-components";
// import { Link } from "react-scroll";

export const FooterContainer = styled.div`
  padding: 1rem;
  height: 30vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: var(--background);
  color: var(--text-primary);
`;

export const Logo = styled.div`
  a {
    font-size: 1.3rem;
    letter-spacing: 4px;
    text-align: center;
    text-decoration: none;
    color: var(--text-primary);
    background-color: var(--background);
  }
`;

export const FooterLinks = styled.div`
  text-align: center;
  padding: 2rem;

  h2 {
    letter-spacing: 3px;
  }

  a {
    font-size: 1.5rem;
  }
`;
