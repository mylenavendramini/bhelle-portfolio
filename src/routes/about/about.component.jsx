import {
  AboutContainer,
  ProjectsGrid,
  RecentWorkGrid,
  ImageWrap,
  TextWrap,
  Underline,
} from "./about.styles.jsx";

import { getAllprojects } from "../../projects.data.js";
import { Link } from "react-router-dom";
import { FadeIn5Div, FadeIn8Div, FadeIn10Div } from "../../animation";

const About = () => {
  const AllProjects = getAllprojects();
  return (
    <div>
      <AboutContainer>
        <FadeIn5Div>
          <ProjectsGrid>
            <img
              src="https://i.ibb.co/KNMTHr9/temporary-Bhelle.jpg"
              alt="libertos"
            />
            <img
              src="https://i.ibb.co/KNMTHr9/temporary-Bhelle.jpg"
              alt="libertos"
            />
          </ProjectsGrid>
        </FadeIn5Div>
        <FadeIn8Div>
          <h1>About</h1>
          <h2>
            Isabhelle Dambros is a 24 years old Brazilian Costume Designer based
            in London, with experience in TV, Movies and Photoshoots.
          </h2>
        </FadeIn8Div>
        <FadeIn10Div>
          <h1>Recent Work</h1>
          <RecentWorkGrid>
            {AllProjects.filter((_, idx) => idx < 3).map((sub) => (
              <ImageWrap key={sub.id}>
                <TextWrap>
                  <Link to={`/home/all/${sub.id}`}>
                    <h2>{sub.name}</h2>
                  </Link>
                  <Underline></Underline>
                  <Link to={`/home/all/${sub.id}`}>
                    {" "}
                    <img src={sub.imageUrl} alt={`${sub.name}`} />
                  </Link>
                </TextWrap>
              </ImageWrap>
            ))}
          </RecentWorkGrid>
        </FadeIn10Div>
      </AboutContainer>
    </div>
  );
};

export default About;
