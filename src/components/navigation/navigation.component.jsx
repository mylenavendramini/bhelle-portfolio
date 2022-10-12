import { useRef, useState, Fragment } from "react";
import { useOnClickOutside } from "../../hooks";

import { NavBarContainer, Logo, NavLinks, NavLink } from "./navigation.styles";

import Burger from "../../components/burger/burger.component";
import Menu from "../../components/menu/menu.component";
import { Outlet } from "react-router-dom";

const Navigation = () => {
  //burger
  const node = useRef();
  useOnClickOutside(node, () => {
    setIsBurgerOpen(false);
  });
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  return (
    <Fragment>
      <NavBarContainer>
        <Logo>
          <a href="/">ISABHELLE DAMBROS</a>
        </Logo>

        <NavLinks>
          <NavLink to={"/home"}>HOME</NavLink>
          <NavLink to={"/home/costume-design"}>COSTUME</NavLink>
          <NavLink to={"/styling"}>STYLING</NavLink>
          <NavLink to={"/about"}>ABOUT</NavLink>
          <NavLink to={"/contact"}>CONTACT</NavLink>

          <a
            href="https://www.imdb.com/name/nm12811124/?ref_=fn_al_nm_1"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            IMDB
          </a>
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
        </NavLinks>

        <div ref={node}>
          <Burger
            isBurgerOpen={isBurgerOpen}
            setIsBurgerOpen={setIsBurgerOpen}
          />
          <Menu isBurgerOpen={isBurgerOpen} setIsBurgerOpen={setIsBurgerOpen} />
        </div>
      </NavBarContainer>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
