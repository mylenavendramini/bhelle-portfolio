import { Outlet } from "react-router-dom";
import { HomeContainer } from "./home.styles.jsx";

import { getTopics } from "../../projects.data.js";
import AllProjects from "../../components/allprojects/allprojects.components";

const Home = () => {
  const topics = getTopics();
  return (
    <div>
      <Outlet />
      <HomeContainer>
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
