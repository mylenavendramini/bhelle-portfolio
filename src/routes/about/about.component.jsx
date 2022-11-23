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
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <AboutContainer>
        <FadeIn5Div>
          <ProjectsGrid>
            <img
              src="https://i.ibb.co/kMzzHjr/64-D9-B6-EF-D21-A-4-FF8-B490-5-C4868-C6.jpg"
              alt="profile-1"
            />
            <img
              src="https://i.ibb.co/dgqZjM9/1494-FF6-A-3-D18-43-D4-813-A-E15333-D7.jpg"
              alt="profile-2"
            />
          </ProjectsGrid>
        </FadeIn5Div>
        <FadeIn8Div>
          <h1>About</h1>
          <h2>
            Brazilian born, but currently living in London and working as a
            costume supervisor. After spending time in the industry for many
            years in Brazil I wanted to move to the UK as there is more
            opportunity for career progression. Since arriving here I have
            worked on several TV dramas covering a range of different historical
            periods as well as modern day. I feel confident working in a variety
            of different roles, however my most recent jobs have been primarily
            as a supervisor and I am hoping to move for a more creative role
            where I can go back to design.
          </h2>
        </FadeIn8Div>
        <FadeIn10Div>
          <h1>Recent Work</h1>
          <RecentWorkGrid>
            {AllProjects.filter((_, idx) => idx < 3).map((sub) => (
              <ImageWrap key={sub.id}>
                <TextWrap>
                  <Link onClick={scrollToTop} to={`/home/all/${sub.id}`}>
                    <h2>{sub.name}</h2>
                  </Link>
                  <Underline></Underline>
                  <Link onClick={scrollToTop} to={`/home/all/${sub.id}`}>
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
