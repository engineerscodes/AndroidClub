import React from "react";
import { Teamgrids } from "./EventGrid";
import EventCrads from "./EventCrads";
import { DisplayListEvent, DisplayH1 } from "../Teams/TeamMainStyled";
import ButtonRouterLink from "../ReactRouterBtn/ButtonRouterLink";
import axios from "axios";
import useSWR from "swr";
import { SunspotLoader } from "react-awesome-loaders";
const EventList = () => {
  const baseURL = `https://androidclubvitap.herokuapp.com/events/info/`;
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(baseURL, fetcher, {
    revalidateOnFocus: false,
  });

  if (error) return <div>failed to load</div>;
  if (!data)
    return (
      <div className="eventloaderSPEAKERCONSTAINER" id="announcement">
        <div id="loader">
          <SunspotLoader
            gradientColors={["#00eda1", "#074127"]}
            shadowColor={"#3ffca8"}
            desktopSize={"250px"}
            mobileSize={"175px"}
          />
        </div>
      </div>
    );

  return (
    <>
      <DisplayListEvent>
        <div style={{ height: "50px" }}></div>
      </DisplayListEvent>
      <DisplayListEvent>
        <DisplayH1 style={{ paddingBottom: "50px" }}> EVENT VIEW </DisplayH1>
      </DisplayListEvent>

      <DisplayListEvent>
        <Teamgrids>
          {data.data.map((data, index) => (
            <EventCrads
              key={index}
              cardText={data.about}
              cardTitles={data.EventName.toUpperCase()}
              edate={data.EventDate}
              image={data.EventImgUrl}
              links="https://www.android.com"
              evenue={data.venue}
              ejoin={data.joinLink}
              rlink={data.RegisterLink}
            />
          ))}
        </Teamgrids>
      </DisplayListEvent>

      <DisplayListEvent>
          
          <ButtonRouterLink />
          
      </DisplayListEvent>
    </>
  );
};
export default EventList;

