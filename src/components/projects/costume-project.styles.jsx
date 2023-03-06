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
    letter-spacing: 4px;
  }

  li {
    list-style: none;
    text-align: left;
    font-size: 1.5rem;
  }
`;

export const VideoContainer = styled.div`
  text-align: center;
  margin-top: 2rem;
  iframe {
    width: 100%;
    border: none;

    @media only screen and (max-width: 900px) {
      height: auto;
    }
  }
`;
