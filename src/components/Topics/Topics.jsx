import React, { useState } from "react";
import "./Topics.css";
import {
  daw,
  mixing,
  mixingConsole,
  vocalProcessing,
  mastering,
  frequencies,
  bgelement1,
} from "../../assets";

const Topics = () => {
  const [currentImage, setCurrentImage] = useState(frequencies);
  return (
    <section id="topics" className="black">
      <div className="wrapper">
        <h2>What will you learn</h2>
        <div className="content-container">
          <ul className="topics-list">
            <li onMouseEnter={() => setCurrentImage(frequencies)}>
              What are frequencies?
            </li>
            <li onMouseEnter={() => setCurrentImage(daw)}>Using the DAW</li>
            <li onMouseEnter={() => setCurrentImage(vocalProcessing)}>
              Vocals Processing
            </li>
            <li onMouseEnter={() => setCurrentImage(mixing)}>Mixing</li>
            <li onMouseEnter={() => setCurrentImage(mixingConsole)}>
              Mixing Console
            </li>
            <li onMouseEnter={() => setCurrentImage(mastering)}>Mastering</li>
          </ul>
          <div className="topic-image">
            <img src={currentImage} alt={currentImage} />
          </div>
        </div>
        <img className="bgelement1" src={bgelement1} alt="bgelement1" />
      </div>
    </section>
  );
};

export default Topics;
