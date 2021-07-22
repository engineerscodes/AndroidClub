import React from "react";
import { DisplayH1, DisplayListEvent } from "../Teams/TeamMainStyled";
import "./new.css";

import axios from "axios";

const New = () => {
  const baseURL = `http://127.0.0.1:8000/announcement/`;
  const [announcement, setannouncement] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setannouncement(response.data);
    });
  }, []);
  if (!announcement) return null;

  return (
    <>
      <DisplayListEvent>
        <div style={{ height: "50px" }}></div>
      </DisplayListEvent>
      <DisplayListEvent>
        <DisplayH1 style={{ paddingBottom: "30px" }}>ANNOUNCEMENT</DisplayH1>
      </DisplayListEvent>
      <DisplayListEvent>
        <div id="Acc-container">
          <div id="Acc-card">
            <h1>{announcement.data.heading}</h1>
            <p>{announcement.data.info}</p>
            <div id="Acc-go-corner">
              <div id="Acc-go-arrow">→</div>
            </div>
          </div>
        </div>
      </DisplayListEvent>
    </>
  );
};

export default New;
