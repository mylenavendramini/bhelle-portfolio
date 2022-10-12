import {
  CostumeProjectContainer,
  VideoContainer,
} from "./costume-project.styles";
import { useParams } from "react-router-dom";
import { getProject } from "../../projects.data.js";

const CostumeProject = () => {
  const { topicId, projectId } = useParams();

  const { name, description, video } = getProject({
    topicId,
    projectId,
  });
  return (
    <div>
      <CostumeProjectContainer>
        <h1>{name}</h1>
        <h2>{description}</h2>
        <VideoContainer>
          <iframe
            width="960"
            height="615"
            src={video}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoContainer>
      </CostumeProjectContainer>
    </div>
  );
};

export default CostumeProject;
