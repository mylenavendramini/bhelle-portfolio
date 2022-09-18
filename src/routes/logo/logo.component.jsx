import { BackgroundLogo, LogoContainer } from "./logo.styles.jsx";

import { Link } from "react-router-dom";
import { Fragment } from "react";

import { FadeInDiv, PulseDiv } from "../../animation";

const Logo = () => {
  return (
    <Fragment>
      <BackgroundLogo>
        <LogoContainer>
          <PulseDiv>
            <FadeInDiv>
              <Link to="/home">
                ISABHELLE <br /> DAMBROS
              </Link>
            </FadeInDiv>
          </PulseDiv>
        </LogoContainer>
      </BackgroundLogo>
    </Fragment>
  );
};

export default Logo;
