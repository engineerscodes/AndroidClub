import React from "react";
import { DisplayH1, DisplayListEvent } from "../Teams/TeamMainStyled";
import "./new.css";

import axios from 'axios'

const New =()=>{
       const baseURL = `http://127.0.0.1:8000/announcement/`;
       const [announcement, setannouncement] = React.useState(null);

       React.useEffect(() => {
         axios.get(baseURL).then((response) => {
           setannouncement(response.data);
         });
       }, []);
       if (!announcement) return null;

      return (
        <>
          <DisplayListEvent>
            <div style={{ height: "50px" }}></div>
          </DisplayListEvent>
          <DisplayListEvent>
            <DisplayH1 style={{ paddingBottom: "30px" }}>
              ANNOUNCEMENT
            </DisplayH1>
          </DisplayListEvent>
          <DisplayListEvent>
            <div id="Acc-container">
              <div id="Acc-card">
                <h1>{announcement.data.heading}</h1>
                <p>{announcement.data.info}</p>
                <div id="Acc-go-corner">
                  <div id="Acc-go-arrow">→</div>
                </div>
              </div>
            </div>
          </DisplayListEvent>
        </>
      );

}

export default New;

/*
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Card | View</title>
    <style>
        *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
        
         
    </style>
</head>

<body>
    <div class="container">
        <div class="card">
           <h1>NAVEEN</h1>
            <div class="go-corner" href="#">
                <div class="go-arrow">
                    →
                </div>
            </div>
        </div>

    </div>
</body>

</html>
*/