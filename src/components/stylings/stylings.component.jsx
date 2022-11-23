import { Fragment } from "react";
import { CostumeContainer } from "../../routes/costume/costume.styles";

import {
  ProjectsGrid,
  ImageWrap,
  TextWrap,
  Underline,
} from "../projectitself/projectitself.styles";

import { Link } from "react-router-dom";
import { FadeIn5Div } from "../../animation";

const Stylings = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Fragment>
      <CostumeContainer>
        <ProjectsGrid>
          {/*{topic.map((sub) => (
            <ImageWrap key={sub.id}>
              <FadeIn5Div>
                <TextWrap>
                  <Link to={sub.id} target="_blank">
                    {" "}
                    <img src={sub.imageUrl} alt={`${sub.name}`} />
                  </Link>
                  <Underline></Underline>
                  <Link to={sub.id}>
                    <h2>{sub.name}</h2>
                  </Link>
                </TextWrap>
              </FadeIn5Div>
            </ImageWrap>
          ))}*/}
          <ImageWrap>
            <FadeIn5Div>
              <TextWrap>
                <Link onClick={scrollToTop} to="/political-blood">
                  {" "}
                  <img
                    src="https://i.ibb.co/PwxnPH5/Screenshot-2022-10-12-at-11-06-18.png"
                    alt="PoliticalBlood"
                  />
                </Link>
                <Underline></Underline>
                <Link onClick={scrollToTop} to="/political-blood">
                  <h2>Political Blood</h2>
                </Link>
              </TextWrap>
            </FadeIn5Div>
          </ImageWrap>

          <ImageWrap>
            <FadeIn5Div>
              <TextWrap>
                <Link to="/whuthering">
                  {" "}
                  <img
                    src="https://i.ibb.co/zfrdWBJ/Screen-Shot-2017-11-03-at-01-11-37.png"
                    alt="Whuthering"
                  />
                </Link>
                <Underline></Underline>
                <Link onClick={scrollToTop} to="/whuthering">
                  <h2>Whuthering</h2>
                </Link>
              </TextWrap>
            </FadeIn5Div>
          </ImageWrap>
        </ProjectsGrid>
      </CostumeContainer>
    </Fragment>
  );
};

export default Stylings;
