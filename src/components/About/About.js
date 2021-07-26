import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
  EventSwrapper,
  LinkWrapper,
  ExternalLink,
} from "./AboutStyled";
import "./Youtubes.css";

const About = ({
  id,
  lightBg,
  imgStart,
  topline,
  lightText,
  headline,
  darkText,
  description,
  img,
  alt,
  eventSwapper,
  dates,
  venu,
  Linkdisc,
  eventLinks,
  headingcolor,
  logos,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine headingcolor={headingcolor}>{topline}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>

                <EventSwrapper eventSwapper={eventSwapper}>
                  <Subtitle darkText={darkText}>{dates}</Subtitle>
                  <Subtitle darkText={darkText}>{venu}</Subtitle>

                  <LinkWrapper>
                    <ExternalLink to={{ pathname: eventLinks }} target="_blank">
                      {Linkdisc}
                    </ExternalLink>
                  </LinkWrapper>
                </EventSwrapper>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <div id="Youtubeplayerac">
                  <iframe
                    src={img}
                    width="450px"
                    height="350px"
                    title="Videos"
                    frameBorder="0"
                    allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <Img src={logos} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default About;
