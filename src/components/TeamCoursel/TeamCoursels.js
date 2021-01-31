import React, { useState } from "react";
import { InputData } from "./InputData";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import "./TeamsStyle.css";

const TeamCoursels = ({ slides }) => {
  const [Currstate, setstates] = useState(0);
  const Length = slides.length;

  const nextSlide = () => {
    setstates(Currstate === Length - 1 ? 0 : Currstate + 1);
  };

  const prevSlide = () => {
    setstates(Currstate === 0 ? Length - 1 : Currstate - 1);
  };

  return (
    <>
      <section className="slider">
        <FaArrowAltCircleLeft className="lefts" onClick={prevSlide} />
        <FaArrowAltCircleRight className="rights" onClick={nextSlide} />
        {InputData.map((Data, index) => {
          return (
            <div
              className={index === Currstate ? "slide-active" : "slide"}
              key={index}
            >
              {index === Currstate && (
                <img className="image" src={Data.image} alt="Images" />
              )}
            </div>
          );
        })}
      </section>
    </>
  );
};

export default TeamCoursels;
