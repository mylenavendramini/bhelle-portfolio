import { Outlet } from "react-router-dom";
import { HomeContainer, ImageWrap, TextWrap } from "./home.styles.jsx";

import { Link } from "react-router-dom";
import { FadeIn5Div } from "../../animation";

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <Outlet />
      <HomeContainer>
        <ImageWrap>
          <FadeIn5Div>
            <TextWrap>
              <Link onClick={scrollToTop} to={"/home/costume-design"}>
                <h2 id="costume">COSTUME</h2>
              </Link>

              <Link onClick={scrollToTop} to={"/home/costume-design"}>
                {" "}
                <img src="https://i.ibb.co/7QtnQZj/LP-8522.png" alt="costume" />
              </Link>
            </TextWrap>
          </FadeIn5Div>
        </ImageWrap>
        <ImageWrap>
          <FadeIn5Div>
            <TextWrap>
              <Link onClick={scrollToTop} to={"/styling"}>
                <h2 id="styling">STYLING</h2>
              </Link>

              <Link onClick={scrollToTop} to={"/styling"}>
                {" "}
                <img
                  src="https://i.ibb.co/7WHnXZk/Screen-Shot-2017-11-03-at-01-11-32.png"
                  alt="styling"
                />
              </Link>
            </TextWrap>
          </FadeIn5Div>
        </ImageWrap>
      </HomeContainer>
    </div>
  );
};

export default Home;
