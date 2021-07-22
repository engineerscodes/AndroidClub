import React from "react";
import "./EventCardStyle.css";
import axios from "axios";
const EventCardGrids = () => {
  const baseURL = `http://127.0.0.1:8000/events/`;
  const [Events, setEvents] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setEvents(response.data);
    });
  }, []);

  if (!Events) return null;

  return (
    <>
      <div className="ContainerEVENTGRID" id="event">
        <div className="EventH1">EVENTS</div>
        <div className="GRIDS">
          {Events.data.map((data, index) => (
            <img
              key={index}
              className="ImageEvents"
              alt={data.EventName}
              src={data.EventImgUrl}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default EventCardGrids;
