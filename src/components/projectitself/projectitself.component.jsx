import { useParams } from "react-router-dom";
import { getTopic } from "../../projects.data";

import {
  ProjectsGrid,
  ImageWrap,
  TextWrap,
  Underline,
} from "./projectitself.styles";

import { Fragment } from "react";
import { Link } from "react-router-dom";
import { FadeIn5Div } from "../../animation";

const ProjectItSelf = () => {
  const { topicId } = useParams();
  const topic = getTopic(topicId);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Fragment>
      <ProjectsGrid>
        {topic.projects.map((sub) => (
          <ImageWrap key={sub.id}>
            <FadeIn5Div>
              <TextWrap>
                <Link onClick={scrollToTop} to={sub.id}>
                  {" "}
                  <img src={sub.imageUrl} alt={`${sub.name}`} />
                </Link>
                <Underline></Underline>
                <Link onClick={scrollToTop} to={sub.id}>
                  <h2>{sub.name}</h2>
                </Link>
              </TextWrap>
            </FadeIn5Div>
          </ImageWrap>
        ))}
      </ProjectsGrid>
    </Fragment>
  );
};

export default ProjectItSelf;
