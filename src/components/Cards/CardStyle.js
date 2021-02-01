import styled from 'styled-components'


export const CardWrapper=styled.div`
   display :block;
`;


export const Card =styled.div`
    display :grid;
    grid-template-columns :300px;
    grid-template-rows :190px 275px 100px;
    grid-template-areas : "images" "texts" "stats";
     

     border-radius :28px;
     background-color:white;
     box-shadow : 5px 5px 15px black;
     text-align :center;
`;


export const  Cardimage  =styled.div`
  grid-area: images;
   background :url( ${({backgrounds}) =>(backgrounds)});
   background-size: cover;
   background-position: center;
   border-top-left-radius :10px;
   border-top-right-radius :10px;
`;


export const Cardtext =styled.div`
    grid-area : texts;
    margin-top: 10px;
    text-align :center;
    margin : 0px;
    padding :0px;
`;

export const ParaCard=styled.p`
    font-size :1rem;
    font-weight :500;
    margin :10px;
`;

export const CardStats=styled.div`

    grid-area : stats;
    display :grid;
    grid-template-columns :1fr 1fr;
    grid-template-rows:1fr;
    border-bottom-right-radius :10px;
    border-bottom-left-radius :10px;
    background :rgb(255,7,110);
    

`;

export const CStat=styled.div`
 display :flex;
 align-items :center;
 justify-content :center;
 flex-direction :column;
 padding :5px;
 color :white;

 
`;

export const AchorTag=styled.a`
   text-decoration :none;
   font-size :2rem;
   color :white;
    font-weight :bolder;
    text-transform : uppercase;

`;

export const Lefts=styled.h3`
    margin :0px;
    font-size :22px;
    text-transform : uppercase;
`;










