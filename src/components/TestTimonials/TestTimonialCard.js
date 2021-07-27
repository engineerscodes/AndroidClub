import React from "react";
import Carousel from "react-elastic-carousel";
import useSWR from "swr";
import "./TestTimonialStyle.css";
import axios from "axios";
import { FlipFlopLoader } from "react-awesome-loaders";

function TestTimonialCardComponent() {
  const baseURL = `https://androidclubvitap.herokuapp.com/BannerImg/testimony/`;
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(baseURL, fetcher, {
    revalidateOnFocus: false,
  });
  if (error) return <div>failed to load</div>;
  if (!data)
    return (
      <>
        <div className="loadertest">
          <FlipFlopLoader
            desktopSize={"128px"}
            mobileSize={"128px"}
            textColor={"#20DEA0"}
            textBeforeRing={"L"}
            textAfterRing={"ADING..."}
            ringColor={"#D3D3D3"}
          />
        </div>
      </>
    );
  return (
    <>
      <Carousel breakPoints={breakPoints} className="TestMon">
        {data.data.map((data, index) => (
          <TsMainCard
            image={data.TestimonialImgUrl}
            key={index}
            testimony={data.testimony}
            author={data.ByName}
          />
        ))}
      </Carousel>
    </>
  );
}

const TsMainCard = (props) => (
  <>
    <div className="TsConatiner">
      <div className="TS1">
        <img
          className="ImageTsCard"
          src={props.image}
          alt="Images"
          width="147px"
          height="220px"
        />
      </div>

      <div className="TS2">
        <p>
          {props.testimony} <span>{props.author}</span>
        </p>
      </div>
    </div>
  </>
);

// Styles

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 800, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 },
  { width: 2000, itemsToShow: 1 },
];

export default TestTimonialCardComponent;
