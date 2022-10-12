import styled from "styled-components";

export const ProjectItSelfContainer = styled.div`
  display: flex;
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  justify-items: center;
  align-items: center;
  margin-top: 6rem;

  @media only screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const TextWrap = styled.div`
  background-size: cover;
  overflow: hidden;
  position: relative;
`;

export const Underline = styled.div`
  position: absolute;
  padding: 2px;
  z-index: 10;
  top: 50%;
  right: -90%;
  margin-top: 25px;
  background-color: var(--text-primary);
  width: 70%;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  transition: all 0.5s;
`;

export const ImageWrap = styled.div`
  position: relative;

  img {
    width: 100%;
    filter: grayscale(100%);
  }

  h2 {
    position: absolute;
    z-index: 11;
    text-align: center;
    /* top: 40%;
    left: 50%; */
    top: 40%;
    left: -80%;
    width: 100%;
    transform: translateX(-50%) translateY(-40%);
    text-transform: uppercase;
    letter-spacing: 2px;
    background: transparent;
    visibility: hidden;
    opacity: 0.5;
    transition: opacity 0.2s, visibility 0.2s;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -ms-transition: all 0.5s;
    transition: all 0.5s;
  }

  &:hover h2 {
    visibility: visible;
    opacity: 1;
    left: 50%;
  }

  &:hover ${Underline} {
    opacity: 0.5;
    right: 15%;
  }

  &:hover img {
    opacity: 0.8;
    filter: grayscale(0%);
  }
`;
