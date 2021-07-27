import { DisplayList, DisplayH1, Teamgrid } from "./TeamMainStyled";
import Teams from "./Teams";
import useSWR from "swr";
import ButtonRouterLink from "../ReactRouterBtn/ButtonRouterLink";
import { BoltLoader } from "react-awesome-loaders";
import React from "react";
import axios from "axios";


function TeamMain() {
  const baseURL = `https://androidclubvitap.herokuapp.com/team/${new Date().getFullYear()}`;
   const fetcher = (url) => axios.get(url).then((res) => res.data);
   const { data, error } = useSWR(baseURL, fetcher, {
     revalidateOnFocus: false,
   });
   if (error) return <div>failed to load</div>;
   if (!data) return (
     <div className="loaderTeam" id="announcement">
       <div id="loader">
         <BoltLoader
           className={"loaderbolt"}
           boltColor={"#20DEA0"}
           backgroundBlurColor={"#616968"}
           desktopsize={"128px"}
           height={350}
         />
       </div>
     </div>
   );

     return (
       <>
       
         <DisplayList>
           <div style={{ height: "25px" }}></div>
         </DisplayList>
         <DisplayList id="team">
           <DisplayH1>
             {" "}
             CORE TEAM {new Date().getFullYear()} -
             {new Date().getFullYear() + 1}{" "}
           </DisplayH1>
         </DisplayList>
         <DisplayList>
           <div style={{ height: "25px" }}></div>
         </DisplayList>
         <DisplayList>
           <Teamgrid>
             {data.data.map((data, index) => (
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
           <ButtonRouterLink gotoPage={"/AndroidClub"} textdes={"Home"} key={"teamtohome"} />
         </DisplayList>
       </>
     );
}
export default TeamMain;
