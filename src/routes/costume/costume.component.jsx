import { CostumeContainer } from "./costume.styles.jsx";
import { Routes, Route } from "react-router-dom";
import CostumeProject from "../../components/projects/costume-project.component.jsx";
import ProjectItSelf from "../../components/projectitself/projectitself.component.jsx";

const Costume = () => {
  return (
    <div>
      <CostumeContainer>
        <Routes>
          <Route index element={<ProjectItSelf />} />
          <Route path=":productId" element={<CostumeProject />} />
        </Routes>
      </CostumeContainer>
    </div>
  );
};

export default Costume;
