import React from "react";
import "./SpeakerStyle.css";
import axios from "axios";
import useSWR from "swr";
import { BoltLoader } from "react-awesome-loaders";

const Speakers = () => {
  const baseURL = `https://androidclubvitap.herokuapp.com/events/alert/`;
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(baseURL, fetcher, {
    revalidateOnFocus: false,
  });

  if (error) return <div>failed to load</div>;
  if (!data)
    return (
      <div className="loaderSPEAKERCONSTAINER" id="announcement">
        <div id="loader">
          <BoltLoader
            className={"loaderbolt"}
            boltColor={"#20DEA0"}
            backgroundBlurColor={"#616968"}
            desktopsize={"128px"}
            height={350}
          />
        </div>
      </div>
    );
  const links = data.data.events.RegisterLink;
  function flinkp(link) {
    if (link === "") {
      console.log("Wait for link !!!");
    } else {
      window.location.href = link;
    }
  }
  return (
    <>
      <div className="SPEAKERCONSTAINER" id="announcement">
        <div className="SpeakerFlex">
          <div className="spk1">
            <img
              className="spk1img"
              src={data.data.speakers.SpkImg}
              alt={data.data.speakers.speakerName.toUpperCase()}
            />
          </div>

          <div className="spk2">
            <h1 className="spk2h1">EVENT ALERT </h1>
            <h2 className="spk2h2">
              {data.data.speakers.speakerName.toUpperCase()}
            </h2>
            <h2 className="spk2h2">
              {data.data.speakers.Designation.toUpperCase()}
            </h2>
            <h3 className="spk2h3">
              {data.data.events.EventDate.toUpperCase()}
            </h3>

            <button className="SpeakerButton" onClick={() => flinkp(links)}>
              Get Your FREE TICKERS HERE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Speakers;

/*

*/
