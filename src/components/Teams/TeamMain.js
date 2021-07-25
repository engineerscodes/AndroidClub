import { DisplayList, DisplayH1, Teamgrid } from "./TeamMainStyled";
import Teams from "./Teams";

import ButtonRouterLink from "../ReactRouterBtn/ButtonRouterLink";

import React from "react";
import axios from "axios";
function TeamMain() {
  const baseURL = `https://androidclubvitap.herokuapp.com/team/${new Date().getFullYear()}`;
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);
  if (!post) return null;

  return (
    <>
      <DisplayList>
        <div style={{ height: "25px" }}></div>
      </DisplayList>
      <DisplayList id="team">
        <DisplayH1>
          {" "}
          CORE TEAM {new Date().getFullYear()} -{new Date().getFullYear() + 1}{" "}
        </DisplayH1>
      </DisplayList>
      <DisplayList>
        <div style={{ height: "25px" }}></div>
      </DisplayList>
      <DisplayList>
        <Teamgrid>
          {post.data.map((data, index) => (
            <div key={index}>
              <Teams
                src={data.img_url}
                name={data.name}
                pbio={data.bio}
                flink={data.fallow}
              />
            </div>
          ))}
        </Teamgrid>
      </DisplayList>

      <DisplayList>
        <ButtonRouterLink gotoPage={"/AndroidClub"} textdes={"Home"} />
      </DisplayList>
    </>
  );
}
export default TeamMain;
