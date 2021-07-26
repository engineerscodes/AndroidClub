import React from "react";
import "./EventCardStyle.css";
import axios from "axios";
import useSWR from "swr";
import { BoltLoader } from "react-awesome-loaders";
const EventCardGrids = () => {
  const baseURL = `https://androidclubvitap.herokuapp.com/events/`;
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(baseURL, fetcher, {
    revalidateOnFocus: false,
  });
  if (error) return <div>failed to load</div>;
  if (!data)
    return (
      <>
        <div className="ContainerEVENTGRID" id="event">
          <div className="EventH1">EVENTS</div>
        </div>
        <div className="loaderevents" id="announcement">
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
      </>
    );

  return (
    <>
      <div className="ContainerEVENTGRID" id="event">
        <div className="EventH1">EVENTS</div>
        <div className="GRIDS">
          {data.data.map((data, index) => (
            <img
              key={index}
              className="ImageEvents"
              alt={data.EventName}
              src={data.EventImgUrl}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default EventCardGrids;
