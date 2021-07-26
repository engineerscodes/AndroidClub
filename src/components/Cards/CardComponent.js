import React from "react";
import Carousel from "react-elastic-carousel";
import style from "./StyleButtons.css";
import { MainCards } from "./CardStyle";
import axios from "axios";
import useSWR from "swr";
import { BoltLoader } from "react-awesome-loaders";


function CardComponent() {
  const baseURL = `https://androidclubvitap.herokuapp.com/BannerImg/challenges/`;
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(baseURL, fetcher, {
    revalidateOnFocus: false,
  });

  if (error) return <div>failed to load</div>;
   if (!data)
     return (
       <div className="NaveenCard" style={style}>
         <div className="brStyleCard" style={style}></div>
         <h1 className="EventTilesInfo">CHALLENGES</h1>

         <div id="CHALLENGESimg">
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
  return (
    <>
      <div className="NaveenCard" style={style}>
        <div className="brStyleCard" style={style}></div>
        <h1 className="EventTilesInfo">CHALLENGES</h1>

        <div className="CarouselWidthController" style={style}>
          <Carousel breakPoints={breakPoints} style={style}>
            {data.data
              .slice(0)
              .reverse()
              .map((data, index) => (
                <MainCard image={data.BannerImgUrl} key={index} />
              ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}

const MainCard = (props) => (
  <>
    <MainCards>
      <img
        className="ImageMaincard"
        src={props.image}
        alt="Images"
        width="400px"
        height="400px"
      />
    </MainCards>
  </>
);

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 800, itemsToShow: 2 },
  { width: 1500, itemsToShow: 3 },
  { width: 2000, itemsToShow: 3 },
];

export default CardComponent;
