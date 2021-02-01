import React from "react";

import Carousel from "react-elastic-carousel";
import style from "./StyleButtons.css";

//import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Card,Cardimage,CardStats,Cardtext,ParaCard,CardWrapper,CStat,AchorTag,Lefts} from './CardStyle'


// PULL REQUEST FROM JAYAN PRAVEEN 
// * Add <MainCard... /> for adding a new card,
// * the rendering and postion will be automatically added,
// * Since its a single component no states are used.




function CardComponent() {
  return (
    <Carousel breakPoints={breakPoints} style={style} >
      <MainCard className="Card-div"
        header="Peace"
        cardTitle="title"
        cardText="Android is a mobile operating system based on a modified version of the Linux kernel and other open source software."

        
        cardTitles="Cards Title"

        cardFooter="Footer"
        image="https://androidcommunity.com/wp-content/uploads/2019/06/Android-Studio-64-bit.jpg"
        links="https://www.android.com"
      />

      <MainCard
        header="Cards Header"
        cardTitle="title"
        cardText="Android is a mobile operating system based on a modified version of the Linux kernel and other open source software."

        cardTitles="Cards Title"

        cardFooter="Footer"
        image="https://androidcommunity.com/wp-content/uploads/2019/06/Android-Studio-64-bit.jpg"
        links="https://naveennaveen.me/"
      />

      <MainCard
        header="Cards Header"
        cardTitle="title"
        cardText="Android is a mobile operating system based on a modified version of the Linux kernel and other open source software."

        cardTitles="Cards Title"

        cardFooter="Footer"
        image="https://androidcommunity.com/wp-content/uploads/2019/06/Android-Studio-64-bit.jpg"
        links="https://naveennaveen.me/"
      />

      <MainCard
        header="Cards Header"
        cardTitle="title"
        cardText="Android is a mobile operating system based on a modified version of the Linux kernel and other open source software."

        cardTitles="Cards Title"

        cardFooter="Footer"
        image="https://androidcommunity.com/wp-content/uploads/2019/06/Android-Studio-64-bit.jpg"
        links="https://naveennaveen.me/"
      />
      <MainCard
        header="Cards Header"
        cardTitle="title"
        cardText="Android is a mobile operating system based on a modified version of the Linux kernel and other open source software."

        cardTitles="Cards Title"

        cardFooter="Footer"
        image="https://androidcommunity.com/wp-content/uploads/2019/06/Android-Studio-64-bit.jpg"
        links="https://naveennaveen.me/"
      />
      <MainCard
        header="Cards Header"
        cardTitle="title"
        cardText="Android is a mobile operating system based on a modified version of the Linux kernel and other open source software."

        cardTitles="Cards Title"

        cardFooter="Footer"
        image="https://androidcommunity.com/wp-content/uploads/2019/06/Android-Studio-64-bit.jpg"
        links="https://naveennaveen.me/"
      />
      <MainCard
        header="Cards Header"
        cardTitle="title"
        cardText="Android is a mobile operating system based on a modified version of the Linux kernel and other open source software."

        cardTitles="Cards Title"

        cardFooter="Footer"
        image="https://androidcommunity.com/wp-content/uploads/2019/06/Android-Studio-64-bit.jpg"
        links="https://naveennaveen.me/"
      />
      <MainCard
        header="Cards Header"
        cardTitle="title"
        cardText="Android is a mobile operating system based on a modified version of the Linux kernel and other open source software."

        cardTitles="Cards Title"

        cardFooter="Footer"
        image="https://androidcommunity.com/wp-content/uploads/2019/06/Android-Studio-64-bit.jpg"
        links="https://naveennaveen.me/"
      />
      <MainCard
        header="Cards Header"
        cardTitle="title"
        cardText="Android is a mobile operating system based on a modified version of the Linux kernel and other open source software."

        cardTitles="Cards Title"

        cardFooter="Footer"
        image="https://androidcommunity.com/wp-content/uploads/2019/06/Android-Studio-64-bit.jpg"
        links="https://naveennaveen.me/"
      />
        
        <MainCard
        header="Cards Header"
        cardTitle="title"
        cardText="Android is a mobile operating system based on a modified version of the Linux kernel and other open source software."

        cardTitles="Cards Title"

        cardFooter="Footer"
        image="https://androidcommunity.com/wp-content/uploads/2019/06/Android-Studio-64-bit.jpg"
        links="https://naveennaveen.me/"
      />




      <MainCard
        header="Cards Header"
        cardTitle="title"
        cardText="Android is a mobile operating system based on a modified version of the Linux kernel and other open source software."

        cardTitles="Cards Title"

        cardFooter="Footer"
        image="https://androidcommunity.com/wp-content/uploads/2019/06/Android-Studio-64-bit.jpg"
        links="https://naveennaveen.me/"
      /> 











    </Carousel>
  );
}

//  Card layout
const MainCard = (props) => (
      <>
      
     <CardWrapper>
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
      </CardWrapper>    
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
/**
 * <div  >

    <Card  >
      <Header >{props.header}</Header>
      <Img src={props.image} />

      <Bodys >
        <Title >{props.cardTitles}</Title>
        <Text>{props.cardText}</Text>
        <Buttons variant="success" href={props.links} target="_blank">

          Success
        </Buttons>  
        <ExternalLink to={{ pathname:props.links} }target="_blank"  >Join </ExternalLink>
        </Bodys>
        <Footer >{props.cardFooter}</Footer>
      </Card>
  
  
  
    </div>
 */