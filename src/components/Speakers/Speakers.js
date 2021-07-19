import React from 'react'
import './SpeakerStyle.css' 
import axios from "axios";

const Speakers = () =>
 {
      const baseURL = `http://127.0.0.1:8000/events/alert/`;
      const [Speaker, setSpeaker] = React.useState(null);

      React.useEffect(() => {
        axios.get(baseURL).then((response) => {
          setSpeaker(response.data);
        });
      }, []);
      if (!Speaker) return null;
      const links = Speaker.data.events.RegisterLink;
      function flinkp(link) {
        if(link ==="")
        {
          console.log("Wait for link !!!")
        }
        else{
        window.location.href = link;
        }
      }
    return (
      <>
        <div className="SPEAKERCONSTAINER" id="announcement">
          <div className="SpeakerFlex">
            <div className="spk1">
              <img
                className="spk1img"
                src={Speaker.data.speakers.SpkImg}
                alt={Speaker.data.speakers.speakerName.toUpperCase()}
              />
            </div>

            <div className="spk2">
              <h1 className="spk2h1">EVENT ALERT </h1>
              <h2 className="spk2h2">
                {Speaker.data.speakers.speakerName.toUpperCase()}
              </h2>
              <h2 className="spk2h2">
                {Speaker.data.speakers.Designation.toUpperCase()}
              </h2>
              <h3 className="spk2h3">
                {Speaker.data.events.EventDate.toUpperCase()}
              </h3>

              <button className="SpeakerButton" onClick={() => flinkp(links)}>
                Get Your FREE TICKERS HERE
              </button>
            </div>
          </div>
        </div>
      </>
    );
}

export default Speakers;
