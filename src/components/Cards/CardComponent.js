import React from "react";

import Carousel from "react-elastic-carousel";
import style from "./StyleButtons.css";

//import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {MainCards} from './CardStyle'




function CardComponent() {
  return (
        <>
        <div className="NaveenCard" style={style}>
       <div className="brStyleCard"  style={style}></div>
       <h1 className="EventTilesInfo">CHALLENGES</h1>

     <div className="CarouselWidthController" style={style}>
    <Carousel breakPoints={breakPoints} style={style} >
      
     
     <MainCard
       
       image="https://instagram.fpnq10-1.fna.fbcdn.net/v/t51.2885-15/e35/94103488_135002498095966_268268835189795825_n.jpg?_nc_ht=instagram.fpnq10-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=xouG0tcFaC8AX9dAtsA&tp=1&oh=f96c795a18540132812ac5e2512845ab&oe=604752F0"
       
     />
      <MainCard
       
       image="https://instagram.fpnq10-1.fna.fbcdn.net/v/t51.2885-15/e35/95427079_2199938276818767_8264144520212908448_n.jpg?_nc_ht=instagram.fpnq10-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=7df1VxOq7VAAX-ESoDr&tp=1&oh=e23a8dea5077e188062b7b2a36af91da&oe=60452368"
       
     />
          

           <MainCard
       
       image="https://instagram.fpnq10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/95986435_238755844042100_567441978249453056_n.jpg?_nc_ht=instagram.fpnq10-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=UXuNQTKmekkAX_pB66M&tp=1&oh=012828de8e8cfa4a74a0a0972abe4841&oe=604581FF"
       
     />
     

      <MainCard
       
       image="https://instagram.fpnq10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/96266353_2319347718368334_8273669043165148598_n.jpg?_nc_ht=instagram.fpnq10-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=l26l0qwDaZwAX_t2LcZ&tp=1&oh=5facd50a6af9aa907909a560d0ffca69&oe=60466F9C"
       
     />
      <MainCard
       
        image="https://instagram.fpnq10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/100997177_232110611576985_6773837881081980995_n.jpg?_nc_ht=instagram.fpnq10-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=XwmlLhjIZxoAX_EgzQX&tp=1&oh=83169d8cad6c05038d9d803040e9936f&oe=60461780"
        
      />
     
    
    

     

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
              <img className="ImageMaincard" src={props.image} alt="Images"  width="400px" height="400px" />
              </MainCards>
        </>
);

// Styles


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 800, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
  { width: 2000, itemsToShow: 4 },
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