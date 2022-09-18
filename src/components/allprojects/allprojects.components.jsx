// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper";
// import "swiper/css";
// import "swiper/css/autoplay";
// import "swiper/css/pagination";

import { Link } from "react-router-dom";
import { getAllprojects } from "../../projects.data.js";

import {
  ProjectsGrid,
  ImageWrap,
  TextWrap,
  Underline,
} from "./allprojects.styles";
import { FadeIn5Div } from "../../animation";

export const AllProjects = () => {
  const allProjects = getAllprojects();
  return (
    <ProjectsGrid>
      {allProjects.map((sub) => (
        <ImageWrap key={sub.id}>
          <FadeIn5Div>
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
          </FadeIn5Div>
        </ImageWrap>
      ))}
    </ProjectsGrid>
  );
};

export default AllProjects;
