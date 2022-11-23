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
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <ProjectsGrid>
      {allProjects.map((sub) => (
        <ImageWrap key={sub.id}>
          <FadeIn5Div>
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
          </FadeIn5Div>
        </ImageWrap>
      ))}
      <ImageWrap>
        <FadeIn5Div>
          <TextWrap>
            <Link onClick={scrollToTop} to="/political-blood" target="_blank">
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
            <Link onClick={scrollToTop} to="/whuthering">
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
  );
};

export default AllProjects;
