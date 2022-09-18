import styled from "styled-components";
import { Link } from "react-router-dom";
// import { Link } from "react-scroll";

export const NavBarContainer = styled.div`
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--background);

  position: sticky;
  z-index: 20;
  top: 0;

  @media only screen and (max-width: 1100px) {
    justify-content: left;
  }

  h1 {
    /* display: none; */
    font-size: 4.5rem;
    text-align: center;
    margin-left: 13rem;
    margin-top: 3rem;
    text-shadow: 0 0 2px #ffffff;
  }

  h2 {
    font-size: 1rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-weight: 400;
    cursor: pointer;
  }
`;

export const Logo = styled.div`
  a {
    font-size: 1.3rem;
    letter-spacing: 4px;
    text-decoration: none;
    color: var(--text-primary);
    background-color: var(--background);

    @media only screen and (max-width: 1100px) {
      margin-left: 1rem;
    }
  }
`;

export const NavLinks = styled.div`
  text-align: center;
  display: flex;

  @media only screen and (max-width: 1100px) {
    display: none;
  }

  a {
    text-decoration: none;
    padding: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 4px;
    padding-left: 2.5rem;
    color: var(--text-primary);
    background-color: var(--background);
    /////gradient effect
    background-image: linear-gradient(to right, grey, white 50%, white 60%);
    display: inline-block;
    background-size: 200% 100%;
    background-position: -100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-position: 0;
    }

    &:hover::before {
      width: 100%;
    }
  }
  img {
    width: 50%;
  }
`;

export const NavLink = styled(Link)``;
