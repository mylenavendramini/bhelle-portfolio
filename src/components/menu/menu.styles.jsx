import styled from "styled-components";
// import { Link } from "react-router-dom";

export const StyledMenu = styled.nav`
  /* display: flex; */
  display: none;
  flex-direction: column;
  justify-content: center;
  background-color: var(--background);
  color: var(--text-primary);
  height: 100%;
  position: fixed;
  overflow: hidden;
  top: 0;
  right: 0;
  z-index: 9;
  transition: transform 0.6s ease-in-out;
  transform: ${({ isBurgerOpen }) =>
    isBurgerOpen ? "translateY(0%)" : "translateY(-100%)"};

  @media only screen and (max-width: 1100px) {
    display: flex;
    width: 100%;
  }

  @media only screen and (min-width: 1000px) {
    transition: transform 0.6s ease-in-out;
    transform: ${({ isBurgerOpen }) =>
      isBurgerOpen ? "translateY(100%)" : "translateY(-100%)"};
  }

  li {
    padding: 1rem 0 1.5rem 0;
    list-style: none;
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    padding: 1rem 1rem;
    font-size: 1.5rem;
    letter-spacing: 5px;
    transition: color 0.3s linear;
    background-color: var(--background);
    color: var(--text-primary);
    padding: 1rem;
    outline: none;
    text-shadow: none;
    text-align: justify;

    &:hover {
      text-shadow: 0 0 2px var(--background);
    }
  }
  img {
    width: 5%;
  }
`;

export const Logo = styled.div`
  background-color: transparent;
  margin-bottom: 4rem;
  text-align: center;

  a {
    font-size: 1.3rem;
    text-align: center;
    text-decoration: none;
    color: var(--text-primary);
  }
`;
