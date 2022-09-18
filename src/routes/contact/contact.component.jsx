import { ContactContainer } from "./contact.styles.jsx";

import { FadeIn5Div } from "../../animation";

const Contact = () => {
  return (
    <FadeIn5Div>
      <ContactContainer>
        <h1>Contact</h1>
        <h2>
          If you want to work with me, please send an email with your project
          details.{" "}
        </h2>
        <a href="mailto:isabhelledambros@gmail.com?subject=contact-for-job">
          isabhelledambros@gmail.com
        </a>
      </ContactContainer>
    </FadeIn5Div>
  );
};

export default Contact;
