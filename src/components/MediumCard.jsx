import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./Card.css";

function EasyCard({ companiesMedium }) {
  const [active, setActive] = useState(true);
  const [flipCard, setFlipCard] = useState(false);
  const [index, setIndex] = useState(0);

  //Function to flip card and exit intro card
  const handleSetActive = () => {
    setActive(false);
    setFlipCard(!flipCard);
  };

  //Activates slider to go up to the next index
  const handleRightArrowKey = () => {
    index > 8 ? setIndex(0) : setIndex(index + 1);
    !active && setFlipCard(true);
  };

  //Activates the slider to go to the previous index
  const handleLeftArrowKey = () => {
    index < 1 ? setIndex(9) : setIndex(index - 1);
    !active && setFlipCard(true);
  };

  return (
    <div className="card">
      <div
        className="cardContainer"
        onClick={handleSetActive}
        style={{ border: "5px solid #FFFF00" }}
      >
        {active && <h2>Medium Mode: Click here to test your knowledge!</h2>}
        {!active && (
          <ReactCardFlip
            isFlipped={flipCard}
            flipDirection="vertical"
            flipSpeedBackToFront="0.4"
          >
            <div>
              <h1 style={{ display: flipCard && "none" }}>
                {companiesMedium[index].answer}
              </h1>
            </div>

            <div>
              <h2
                flipSpeedFrontToBack="0.4"
                style={{ display: !flipCard && "none" }}
              >
                {companiesMedium[index].question}
              </h2>
            </div>
          </ReactCardFlip>
        )}
      </div>
      <div className="arrow">
        <div onClick={handleLeftArrowKey} className="leftArrowKey">
          ←
        </div>
        <div onClick={handleRightArrowKey} className="rightArrowKey">
          →
        </div>
      </div>
    </div>
  );
}

export default EasyCard;
