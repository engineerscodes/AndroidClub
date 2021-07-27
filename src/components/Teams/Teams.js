import React from "react";

import {
  Team,
  BackgroundImg,
  ProfileImage,
  PersonName,
  Position,
  Qutoes,
  FollowBtn,
} from "./TeamsStyle";

const Teams = (props) => {
  const links = props.flink;
  function flinkp(link) {
    window.location.href = link;
  }
  return (
    <>
      <Team>
        <BackgroundImg></BackgroundImg>

        <ProfileImage alt="Profile Picture" src={props.src}></ProfileImage>

        <PersonName>{props.name}</PersonName>
        <Position> Team Lead</Position>

        <Qutoes>{props.pbio}</Qutoes>

        <FollowBtn onClick={() => flinkp(links)}>Follow</FollowBtn>
      </Team>
    </>
  );
};

export default Teams;
