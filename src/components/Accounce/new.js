import React from "react";
import { DisplayH1, DisplayListEvent } from "../Teams/TeamMainStyled";
import "./new.css";
import axios from "axios";
import useSWR from "swr";
import { XlviLoader } from "react-awesome-loaders";
const New = () => {
  const baseURL = `https://androidclubvitap.herokuapp.com/announcement/`;
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(baseURL, fetcher, {
    revalidateOnFocus: false,
  });

  if (error) return <div>failed to load</div>;
  if(!data) return (
    <>
      <DisplayListEvent>
        <div style={{ height: "50px" }}></div>
      </DisplayListEvent>
      <DisplayListEvent>
        <DisplayH1 style={{ paddingBottom: "30px" }}>ANNOUNCEMENT</DisplayH1>
      </DisplayListEvent>
      <DisplayListEvent>
        <div id="Acc-container">
          <XlviLoader
            boxColors={["#D3D3D3", "#FFFFFF", "#000000"]}
            desktopSize={"128px"}
            mobileSize={"100px"}
          />
        </div>
      </DisplayListEvent>
    </>
  );

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
            <h1>{data.data.heading}</h1>
            <p>{data.data.info}</p>
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

/*

 

*/