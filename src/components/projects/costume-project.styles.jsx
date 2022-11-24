import styled from "styled-components";

export const CostumeProjectContainer = styled.div`
  margin: 6rem 0 6rem 0;
  justify-content: center;
  justify-items: center;
  justify-self: center;

  @media only screen and (max-width: 1200px) {
    margin: 3rem 0 3rem 0;
    padding: 1rem;
  }

  h1 {
    text-transform: uppercase;
    text-align: center;
    /* margin-bottom: 6rem; */
    letter-spacing: 4px;
  }

  h2 {
    margin-bottom: 6rem;
    margin-top: 6rem;
    letter-spacing: 2px;
    text-align: justify;

    @media only screen and (max-width: 1200px) {
      margin-bottom: 2rem;
      margin-top: 2rem;
    }
  }
`;

export const VideoContainer = styled.div`
  text-align: center;

  iframe {
    width: 100%;
  }
`;
