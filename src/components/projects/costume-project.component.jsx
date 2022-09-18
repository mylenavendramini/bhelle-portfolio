import {
  CostumeProjectContainer,
  VideoContainer,
} from "./costume-project.styles";
import { useParams } from "react-router-dom";
import { getProject } from "../../projects.data.js";

const CostumeProject = () => {
  const { topicId, projectId } = useParams();

  const { name, description, imageUrl, video } = getProject({
    topicId,
    projectId,
  });
  return (
    <div>
      <CostumeProjectContainer>
        <div>
          <h1>{name}</h1>
        </div>
        <h2>{description}</h2>
        <VideoContainer>
          <iframe
            width="560"
            height="315"
            src={video}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <img src={imageUrl} alt={`${name}`} />
        </VideoContainer>
      </CostumeProjectContainer>
    </div>
  );
};

export default CostumeProject;
