import React from 'react'
import {Card,Cardimage,CardStats,Cardtext,ParaCard,CardWrapper,CStat,AchorTag,Lefts} from '../Cards/CardStyle'
const EventCrads = (props) => {
    return (
         <CardWrapper>
        <Card >
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
         
        </CardWrapper>
        
    )
}

export default EventCrads;
