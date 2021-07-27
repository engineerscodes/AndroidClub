import styled from "styled-components";

export const Team = styled.div`
  box-shadow: 0px 2px 8px 0px white;
  text-align: center;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  min-height: 560px;
  background: white;
  width: 300px;
  &:hover {
    cursor: default;
    transition: all 2s ease-in-out 0.5s;
    filter: blur(0.5px);
  }
  @media screen and (max-width: 400px) {
    width: auto;
    margin-left: 25px;
    margin-right: 25px;
    height: fit-content;
  }
  @media screen and (max-width: 350px) {
    width: auto;
    margin-left: 20px;
    margin-right: 20px;
    height: fit-content;
  }
`;

export const BackgroundImg = styled.div`
  position: absolute;
  background-image: url("https://github.com/engineerscodes/engineerscodes/blob/master/Img/nature.jpg?raw=true");
  height: 10rem;
  width: 100%;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ProfileImage = styled.img`
  width: 8rem;
  clip-path: circle(60px at center);
  margin-top: 4.5rem;

  &:hover {
    cursor: default;
    transform: rotate(360deg);
    transition: all 0.7s ease-in-out 0.5s;
  }
`;

export const PersonName = styled.h1`
  font-size: 1.5rem;
`;

export const Position = styled.h1`
  font-size: 1.5rem;
  text-transform: uppercase;
`;
export const Qutoes = styled.h1`
  margin: 1rem 2rem;
  font-size: 0.9rem;
  padding-bottom: 5px;

  @media screen and (max-width: 400px) {
    overflow: auto;
    height: 120px;
  }
`;

export const FollowBtn = styled.button`
  width: 100%;
  border: none;
  font-size: 1rem;
  color: white;
  background-color: #01bf71;
  padding: 1rem;
  position: absolute;
  bottom: 0;
  left: 0;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
