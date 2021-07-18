import React from "react";

import Carousel from "react-elastic-carousel";
import style from "./StyleButtons.css";

//import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { MainCards } from "./CardStyle";
import axios from "axios";

function CardComponent() {
  const baseURL = `http://127.0.0.1:8000/BannerImg/challenges/`;
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
                <MainCard image={data.BannerImgUrl} />
              ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}

//  Card layout
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

// Styles

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 800, itemsToShow: 2 },
  { width: 1500, itemsToShow: 3 },
  { width: 2000, itemsToShow: 3 },
];

export default CardComponent;

/*     <CardWrapper>
      <Card>
          <Cardimage backgrounds={props.image}></Cardimage>
          <Cardtext>

             <h1>{props.cardTitles}</h1>
             <h3>Date :xxxxxxx</h3>
             <h3>venue :xxxxxxx</h3>
             <ParaCard>{props.cardText}</ParaCard>

          </Cardtext>
        
          <CardStats>

              <CStat>
                  
                  <AchorTag href="" >Join</AchorTag>
                  <Lefts>Days Left </Lefts>
              </CStat>

              <CStat>
                  
                  <AchorTag href="" >REG</AchorTag>
                  <Lefts>xxxx</Lefts>
              </CStat>

          </CardStats>


      </Card>
      </CardWrapper>   */
