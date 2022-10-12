import { StylingContainer } from "./styling.styles.jsx";
import { Routes, Route } from "react-router-dom";
import StylingProject from "../../components/projects/styling-project.component.jsx";
import ProjectItSelf from "../../components/projectitself/projectitself.component.jsx";

const Styling = () => {
  return (
    <div>
      <StylingContainer>
        <Routes>
          <Route index element={<ProjectItSelf />} />
          <Route path=":productId" element={<StylingProject />} />
        </Routes>
      </StylingContainer>
    </div>
  );
};

export default Styling;
