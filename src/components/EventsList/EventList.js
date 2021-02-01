import React from 'react'
import { Teamgrids} from "./EventGrid";
import  EventCrads from './EventCrads'
import { DisplayListEvent,DisplayH1}  from '../Teams/TeamMainStyled'

import  ButtonRouterLink from '../ReactRouterBtn/ButtonRouterLink'

const EventList = () => {
    return (
        <>
            <DisplayListEvent> <DisplayH1> EVENT  VIEW </DisplayH1></DisplayListEvent> 
            <DisplayListEvent>   
          <Teamgrids >
              
                <EventCrads 
        header="Peace"
        cardTitle="title"
        cardText="Android is a mobile operating system based on a modified version of the Linux kernel and other open source software."

        
        cardTitles="Cards Title"

        cardFooter="Footer"
        image="https://androidcommunity.com/wp-content/uploads/2019/06/Android-Studio-64-bit.jpg"
        links="https://www.android.com"/>
              
              <EventCrads className="Card-div"
        header="Peace"
        cardTitle="title"
        cardText="Android is a mobile operating system based on a modified version of the Linux kernel and other open source software."

        
        cardTitles="Cards Title"

        cardFooter="Footer"
        image="https://androidcommunity.com/wp-content/uploads/2019/06/Android-Studio-64-bit.jpg"
        links="https://www.android.com"/>

<EventCrads className="Card-div"
        header="Peace"
        cardTitle="title"
        cardText="Android is a mobile operating system based on a modified version of the Linux kernel and other open source software."

        
        cardTitles="Cards Title"

        cardFooter="Footer"
        image="https://androidcommunity.com/wp-content/uploads/2019/06/Android-Studio-64-bit.jpg"
        links="https://www.android.com"/>
               <EventCrads className="Card-div"
        header="Peace"
        cardTitle="title"
        cardText="Android is a mobile operating system based on a modified version of the Linux kernel and other open source software."

        
        cardTitles="Cards Title"

        cardFooter="Footer"
        image="https://androidcommunity.com/wp-content/uploads/2019/06/Android-Studio-64-bit.jpg"
        links="https://www.android.com"/>
               <EventCrads className="Card-div"
        header="Peace"
        cardTitle="title"
        cardText="Android is a mobile operating system based on a modified version of the Linux kernel and other open source software."

        
        cardTitles="Cards Title"

        cardFooter="Footer"
        image="https://androidcommunity.com/wp-content/uploads/2019/06/Android-Studio-64-bit.jpg"
        links="https://www.android.com"/>
               <EventCrads className="Card-div"
        header="Peace"
        cardTitle="title"
        cardText="Android is a mobile operating system based on a modified version of the Linux kernel and other open source software."

        
        cardTitles="Cards Title"

        cardFooter="Footer"
        image="https://androidcommunity.com/wp-content/uploads/2019/06/Android-Studio-64-bit.jpg"
        links="https://www.android.com"/>
               <EventCrads className="Card-div"
        header="Peace"
        cardTitle="title"
        cardText="Android is a mobile operating system based on a modified version of the Linux kernel and other open source software."

        
        cardTitles="Cards Title"

        cardFooter="Footer"
        image="https://androidcommunity.com/wp-content/uploads/2019/06/Android-Studio-64-bit.jpg"
        links="https://www.android.com"/>

        
        
          </Teamgrids>
            
             </DisplayListEvent>

          <DisplayListEvent>  <ButtonRouterLink gotoPage={"/AndroidClub"} textdes={"Home"} /></DisplayListEvent>


        </>
    )
}

export default EventList;
