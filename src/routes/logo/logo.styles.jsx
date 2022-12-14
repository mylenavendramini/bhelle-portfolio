import styled from "styled-components";

export const BackgroundLogo = styled.div`
  background-image: url("https://i.ibb.co/hX2JdXj/LP-8102.jpg");
  background-position: center;
  background-color: var(--background);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: relative;
  height: 100vh;
  color: var(--text-primary);
  position: relative;
`;

export const LogoContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-40%);
  background-color: transparent;
  text-align: center;
  justify-content: center;
  align-items: center;
  /* margin-left: 5rem; */

  #top:before {
    content: "";
    position: absolute;
    left: -6%;
    top: 0;
    height: 5px;
    width: 40%;
    margin-top: -2px;
    border-top: 2px solid white;
  }

  #bottom:before {
    content: "";
    position: absolute;
    right: -6%;
    bottom: 0;
    height: 5px;
    width: 40%;
    border-bottom: 2px solid white;
  }

  #left:before {
    content: "";
    position: absolute;
    left: 0;
    top: -2%;
    height: 60px;
    width: 50%;
    margin-left: -12px;
    border-left: 2px solid white;
  }

  #right:before {
    content: "";
    position: absolute;
    right: -6%;
    bottom: 0;
    height: 60px;
    width: 50%;
    border-right: 2px solid white;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    background-color: transparent;
    /////gradient effect
    background-image: linear-gradient(to right, grey, white 50%, white 50%);
    background-size: 200% 100%;
    background-position: -100%;
    display: inline-block;
    padding: 5px 0;
    position: relative;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.6s ease-in-out;

    &:hover {
      background-position: 0;
    }

    &:hover::before {
      width: 100%;
    }
  }
`;
