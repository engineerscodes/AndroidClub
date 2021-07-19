import React from 'react'
import {Card,Cardimage,CardStats,Cardtext,ParaCard,CardWrapper,CStat,AchorTag,Lefts} from '../Cards/CardStyle'
const EventCrads = (props) => {
    let leftDate;
    let curdate=new Date();
    function leftdate(){
         let edate = props.edate;
         console.log(new Date(edate));
         let d1=new Date(edate).getTime()
         let d2=new Date().getTime()
         let diff=d1-d2
         if(diff<0)
         {
            leftDate=0;
         }
         else{
         let diffinday=diff/ (1000 * 3600 * 24)
           leftDate= Math.round(diffinday) +1;
         }
        
    }
    leftdate()
    return (
      <CardWrapper>
        <Card>
          <Cardimage backgrounds={props.image}></Cardimage>
          <Cardtext>
            <h1>{props.cardTitles}</h1>
            <h3>DATE : {props.edate.split("-").reverse().join("-")}</h3>
            <h3>VENUE : {props.evenue}</h3>
            <ParaCard>{props.cardText}</ParaCard>
          </Cardtext>

          <CardStats>
            <CStat>
              <AchorTag href={props.ejoin} target="_blank">
                Join
              </AchorTag>
              <Lefts>Days Left </Lefts>
            </CStat>

            <CStat>
              <AchorTag href={props.rlink} target="_blank">
                REG
              </AchorTag>
              <Lefts>{leftDate}</Lefts>
            </CStat>
          </CardStats>
        </Card>
      </CardWrapper>
    );
}

export default EventCrads;
