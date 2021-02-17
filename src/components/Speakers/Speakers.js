import React from 'react'
import './SpeakerStyle.css' 

const Speakers = () =>
 {
    return (
      <>
        <div className="SPEAKERCONSTAINER" id="announcement">
          <div className="SpeakerFlex">
            <div className="spk1">
              <img
                className="spk1img"
                src="https://im.rediff.com/money/2014/sep/19sundar4.jpg"
                alt="Speaker's"
              />
            </div>

            <div className="spk2">
              <h1 className="spk2h1">EVENT ALERT </h1>
              <h2 className="spk2h2"> Speaker Name</h2>
              <h2 className="spk2h2">Designation</h2>
              <h3 className="spk2h3">EVENT DATE</h3>

              <button className="SpeakerButton">
                Get Your FREE TICKERS HERE
              </button>
            </div>
          </div>
        </div>
      </>
    );
}

export default Speakers;
