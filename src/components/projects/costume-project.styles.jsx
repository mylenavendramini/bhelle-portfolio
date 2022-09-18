import styled from "styled-components";

export const CostumeProjectContainer = styled.div`
  padding: 6rem;
  justify-content: center;
  justify-items: center;
  justify-self: center;

  @media only screen and (max-width: 800px) {
    margin: 0;
  }

  h1 {
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 6rem;
    letter-spacing: 4px;
  }

  img {
    margin-top: 6rem;
    width: 100%;
  }

  h2 {
    margin-bottom: 6rem;
    margin-top: 6rem;
    letter-spacing: 2px;
  }
`;

export const VideoContainer = styled.div`
  text-align: center;
`;
