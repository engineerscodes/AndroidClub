import React from "react";
import Carousel from "react-elastic-carousel";
import style from "./StyleButtons.css";
import { MainCards } from "./CardStyle";
import axios from "axios";

function CardComponent() {
  const baseURL = `https://androidclubvitap.herokuapp.com/BannerImg/challenges/`;
  const [Challenges, setChallenges] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setChallenges(response.data);
    });
  }, []);
  if (!Challenges) return null;

  return (
    <>
      <div className="NaveenCard" style={style}>
        <div className="brStyleCard" style={style}></div>
        <h1 className="EventTilesInfo">CHALLENGES</h1>

        <div className="CarouselWidthController" style={style}>
          <Carousel breakPoints={breakPoints} style={style}>
            {Challenges.data
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
