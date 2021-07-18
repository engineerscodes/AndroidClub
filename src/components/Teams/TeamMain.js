import { DisplayList, DisplayH1, Teamgrid } from "./TeamMainStyled";
import Teams from "./Teams";

import ButtonRouterLink from "../ReactRouterBtn/ButtonRouterLink";

import React from "react";
import axios from "axios";
function TeamMain() {
  const baseURL = `http://127.0.0.1:8000/team/${new Date().getFullYear()}`;
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);
  if (!post) return null;

  return (
    <>
      <DisplayList id="team">
        <DisplayH1> CORE TEAM 2020-2021 </DisplayH1>
      </DisplayList>
      <DisplayList>
        <Teamgrid>
          {post.data.map((data, index) => (
            <div key={index}>
              <Teams
                src={data.img_url}
                name={data.name}
                pbio={data.bio}
                flink={data.fallow}
              />
            </div>
          ))}
        </Teamgrid>
      </DisplayList>

      <DisplayList>
        <ButtonRouterLink gotoPage={"/AndroidClub"} textdes={"Home"} />
      </DisplayList>
    </>
  );
}
export default TeamMain;

/*

import "./App.css";
import React from "react";
import axios from "axios";


const baseURL = "http://127.0.0.1:8000/team/";
function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;
  return (
    <div className="App">
      {post.data.map((data, index) => (
        <div key={index}>
          <h1>{data.name}</h1>
          <h1>{data.bio}</h1>
          <img src={data.img_url} alt="logo" width="250" height="250" />
          <br></br>
        </div>
      ))}
    </div>
  );
}
export default App;



*/
/*class App extends React.Component {
  componentDidMount() {
    const url = "http://127.0.0.1:8000/team/";
    fetch(url)
      .then((respone) => respone.json())
      .then((data) => console.log(data));
  }
  render() {
    return <div>HELLO WORLD</div>;
  }
}
*/
