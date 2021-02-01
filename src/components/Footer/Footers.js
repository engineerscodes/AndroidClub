import React from 'react'
import {
    FooterConatiner,FooterWrap,
    FooterItemConatiner,FooterItemsWrapper,
     FooterItems,FooterTitle,Footertext,
     MediaWraper,SocialMediaWrap,
     Logo,SICONS,
     SoicalLinks ,
     CopyRights
    
    
    } 
    from './FooterStyle'
import {FaInstagram,FaGithub} from 'react-icons/fa'
import {SiDiscord,SiGmail} from 'react-icons/si'
const Footers = () => {
    return (
       
           <FooterConatiner id="contact">
           <FooterWrap>
           <FooterItemConatiner>
               <FooterItemsWrapper>
               <FooterItems >
                 <FooterTitle >About Us </FooterTitle>
                 <Footertext to={{ pathname:"https://vitap.ac.in/"}} target="_blank" > VIT-AP</Footertext>
                 <Footertext to={{ pathname:"https://discord.gg/X4wHTzk"}} target="_blank"> Discord Server</Footertext>
                 <Footertext to={{ pathname:"https://www.instagram.com/androidclubvitap/?hl=en"}} target="_blank"> Instagram</Footertext>
               </FooterItems>

               <FooterItems >
                 <FooterTitle >Contact Us </FooterTitle>
                 <Footertext to={{pathname :"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=mknaveen837@gmail.com"}} target="_blank"> Gmail</Footertext>
                 <Footertext to={{ pathname:"https://discord.gg/X4wHTzk"}} target="_blank"> Join Discord </Footertext>
                 <Footertext to={{ pathname:"https://github.com/Android-Club-VITAP"}} target="_blank"> GITHUB </Footertext>
               </FooterItems>

               </FooterItemsWrapper>

               <FooterItemsWrapper>
               <FooterItems >
                 <FooterTitle >Projects </FooterTitle>
                 <Footertext to={{pathname :"https://github.com/Android-Club-VITAP/VTOP-Extended"}} target="_blank"> VTOP-Extended</Footertext>
                {/* <Footertext to=""> Vit-AP</Footertext>
                 <Footertext to=""> Vit-AP</Footertext> */}
               </FooterItems>

               <FooterItems >
                 <FooterTitle > Blogs </FooterTitle>
                 <Footertext to="/AndroidClub"> Coming soon...</Footertext>
                 <Footertext to="/AndroidClub"> Coming soon...</Footertext>
                 <Footertext to="/AndroidClub"> Coming soon...</Footertext>
               </FooterItems>
               
               </FooterItemsWrapper>
           </FooterItemConatiner>
            
           <MediaWraper>
               <SocialMediaWrap>
              <Logo to="banner"> android club vitap </Logo>    
             
             <SICONS>
                 <SoicalLinks   href="//www.instagram.com/androidclubvitap/?hl=en"  target="_blank" aria-label="Instagram"> <FaInstagram/> </SoicalLinks>
                 <SoicalLinks  href="//discord.gg/X4wHTzk"  target="_blank" aria-label="Discord"> <SiDiscord/> </SoicalLinks>
                 <SoicalLinks href="//github.com/Android-Club-VITAP" target="_blank" aria-label="GitHub"> <FaGithub/> </SoicalLinks>
                 <SoicalLinks href="//mail.google.com/mail/?view=cm&fs=1&tf=1&to=mknaveen837@gmail.com" target="_blank" aria-label="G-mail"> <SiGmail/> </SoicalLinks>



             </SICONS>
             </SocialMediaWrap>
           </MediaWraper>
           <CopyRights>
           Copyright © {new Date().getFullYear()} All rights reserved |Android Club Vitap|
           </CopyRights>
           </FooterWrap> 

        </FooterConatiner>  
       
    )
}

export default Footers;
