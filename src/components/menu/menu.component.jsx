import React, { Fragment } from "react";
import { StyledMenu, Logo, NavLink } from "./menu.styles";
import { bool } from "prop-types";

// import { TadaAnimation } from "../../animation";

const Menu = ({ isBurgerOpen }) => {
  return (
    <Fragment>
      <StyledMenu isBurgerOpen={isBurgerOpen}>
        <Logo>
          <a href="/">ISABHELLE DAMBROS</a>
        </Logo>
        <ul>
          <li>
            <a href={"/home"}>HOME</a>
          </li>
          <li>
            {" "}
            <a href={"/home/costume-design"}>COSTUME</a>
          </li>
          <li>
            {" "}
            <a href={"/home/styling"}>STYLING</a>
          </li>
          <li>
            <a href={"/about"}>ABOUT</a>
          </li>
          <li>
            {" "}
            <a href={"/contact"}>CONTACT</a>
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
