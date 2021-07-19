import React from 'react'
import { Teamgrids} from "./EventGrid";
import  EventCrads from './EventCrads'
import { DisplayListEvent,DisplayH1}  from '../Teams/TeamMainStyled'
import  ButtonRouterLink from '../ReactRouterBtn/ButtonRouterLink'
import axios from "axios";


const EventList = () => {
    
     const baseURL = `http://127.0.0.1:8000/events/info/`;
     const [Epage, setEpage] = React.useState(null);

     React.useEffect(() => {
       axios.get(baseURL).then((response) => {
         setEpage(response.data);
       });
     }, []);
     if (!Epage) return null;


    return (
      <>
        <DisplayListEvent>
          {" "}
          <DisplayH1> EVENT VIEW </DisplayH1>
        </DisplayListEvent>
        <DisplayListEvent>
          <Teamgrids>
            {Epage.data.map((data, index) => (
              ///<TsMainCard image={data.TestimonialImgUrl} key={index} testimony={data.testimony} author={data.ByName}/>

              <EventCrads  key={index}
                cardText={data.about}
                cardTitles={data.EventName.toUpperCase()}
                edate={data.EventDate}
                image="https://github.com/engineerscodes/engineerscodes/blob/master/Img/Android-Studio-64-bit.jpg?raw=true"
                links="https://www.android.com"
                evenue={data.venue}
                ejoin={data.joinLink}
                rlink={data.RegisterLink}
              />
            ))}
          </Teamgrids>
        </DisplayListEvent>

        <DisplayListEvent>
          {" "}
          <ButtonRouterLink gotoPage={"/AndroidClub"} textdes={"Home"} />
        </DisplayListEvent>
      </>
    );
}

export default EventList;
