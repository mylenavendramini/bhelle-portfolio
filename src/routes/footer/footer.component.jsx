import { Fragment } from "react";

import { FooterContainer, FooterLinks, Logo } from "./footer.styles";

const Footer = () => {
  return (
    <Fragment>
      <FooterContainer>
        <Logo>
          <a href="/">ISABHELLE DAMBROS</a>
        </Logo>
        <FooterLinks>
          <a href="mailto:isabhelledambros@gmail.com?subject=contact-for-job">
            isabhelledambros@gmail.com
          </a>
        </FooterLinks>
      </FooterContainer>
    </Fragment>
  );
};

export default Footer;
