import { Outlet } from "react-router-dom";
import { HomeContainer } from "./home.styles.jsx";

import { getTopics } from "../../projects.data.js";
import AllProjects from "../../components/allprojects/allprojects.components";
import { Link } from "react-router-dom";

const Home = () => {
  const topics = getTopics();
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <Outlet />
      <HomeContainer>
        {/* <h1>COSTUME TEST</h1>
        <Link onClick={scrollToTop} to={"/home/costume-design"}>
          COSTUME
        </Link>

        <h1>STYLING TEST</h1>
        <Link onClick={scrollToTop} to={"/styling"}>
          STYLING
  </Link>*/}
        {topics.map(({ name, id }) => (
          <div key={id}>
            {/*<Link to={id}>
                <h1>{name}</h1>
          </Link>*/}
          </div>
        ))}
        <AllProjects />
      </HomeContainer>
    </div>
  );
};

export default Home;
