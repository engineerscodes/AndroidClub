import React from "react";

import Carousel from "react-elastic-carousel";

import   "./TestTimonialStyle.css"

function TestTimonialCardComponent() {
  return (
        <>
         
    <Carousel breakPoints={breakPoints}  className="TestMon"  >
      
     
     <TsMainCard
       
       image="https://instagram.fpnq10-1.fna.fbcdn.net/v/t51.2885-15/e35/94103488_135002498095966_268268835189795825_n.jpg?_nc_ht=instagram.fpnq10-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=xouG0tcFaC8AX9dAtsA&tp=1&oh=f96c795a18540132812ac5e2512845ab&oe=604752F0"
       
     />
      <TsMainCard
       
       image="https://instagram.fpnq10-1.fna.fbcdn.net/v/t51.2885-15/e35/95427079_2199938276818767_8264144520212908448_n.jpg?_nc_ht=instagram.fpnq10-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=7df1VxOq7VAAX-ESoDr&tp=1&oh=e23a8dea5077e188062b7b2a36af91da&oe=60452368"
       
     />
          

           <TsMainCard
       
       image="https://instagram.fpnq10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/95986435_238755844042100_567441978249453056_n.jpg?_nc_ht=instagram.fpnq10-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=UXuNQTKmekkAX_pB66M&tp=1&oh=012828de8e8cfa4a74a0a0972abe4841&oe=604581FF"
       
     />
     

      <TsMainCard
       
       image="https://instagram.fpnq10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/96266353_2319347718368334_8273669043165148598_n.jpg?_nc_ht=instagram.fpnq10-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=l26l0qwDaZwAX_t2LcZ&tp=1&oh=5facd50a6af9aa907909a560d0ffca69&oe=60466F9C"
       
     />
      <TsMainCard
       
        image="https://instagram.fpnq10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/100997177_232110611576985_6773837881081980995_n.jpg?_nc_ht=instagram.fpnq10-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=XwmlLhjIZxoAX_EgzQX&tp=1&oh=83169d8cad6c05038d9d803040e9936f&oe=60461780"
        
      />
     
    
    

     

    </Carousel>
    </>
  );
}

const TsMainCard = (props) => (
        <>
            <div className="TsConatiner">
                  <div className="TS1">
                     <img className="ImageTsCard" src={props.image} alt="Images"  width="147px" height="220px" />
                  </div>

                  <div  className="TS2">
                       <p>“One of the best clubs out there to hone your skills.” Cpt. Jack Sparrow</p>
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