import React, { Fragment } from "react";
import { StyledMenu, Logo, NavLink } from "./menu.styles";
import { bool } from "prop-types";

// import { TadaAnimation } from "../../animation";

const Menu = ({ isBurgerOpen }) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Fragment>
      <StyledMenu isBurgerOpen={isBurgerOpen}>
        <Logo>
          <a onClick={scrollToTop} href="/">
            ISABHELLE DAMBROS
          </a>
        </Logo>
        <ul>
          <li>
            <a onClick={scrollToTop} href={"/home"}>
              HOME
            </a>
          </li>
          <li>
            {" "}
            <a onClick={scrollToTop} href={"/home/costume-design"}>
              COSTUME
            </a>
          </li>
          <li>
            {" "}
            <a onClick={scrollToTop} href={"/home/styling"}>
              STYLING
            </a>
          </li>
          <li>
            <a onClick={scrollToTop} href={"/about"}>
              ABOUT
            </a>
          </li>
          <li>
            {" "}
            <a onClick={scrollToTop} href={"/contact"}>
              CONTACT
            </a>
          </li>
          <li>
            <a
              href="https://m.imdb.com/name/nm12811124/
          "
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              IMDB
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/bhelled/"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              <img
                src="https://i.ibb.co/sRpSCWb/icons8-instagram-50.png"
                alt="instagram-icon"
              />
            </a>
          </li>
        </ul>
      </StyledMenu>
    </Fragment>
  );
};
Menu.propTypes = {
  isBurgerOpen: bool.isRequired,
};
export default Menu;
