import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./Card.css";

function EasyCard({ companiesEasy }) {
  const [active, setActive] = useState(true);
  const [flipCard, setFlipCard] = useState(false);
  const [index, setIndex] = useState(0);

  //Function to flip card and exit intro card
  const handleSetActive = () => {
    setActive(false);
    setFlipCard(!flipCard);
  };

  const shuffleIndex = () => {
    setIndex(Math.floor(Math.random() * 10));
    console.log(index)
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
        style={{ border: "5px solid #39FF14" }}
      >
        {active && <h2>Easy Mode: Click here to test your knowledge!</h2>}
        {!active && (
          <ReactCardFlip
            isFlipped={flipCard}
            flipDirection="vertical"
          >
            <div>
              <h1 style={{ display: flipCard && "none" }}>
                {companiesEasy[index].answer}
              </h1>
            </div>

            <div>
              <h2
                style={{ display: !flipCard && "none" }}
              >
                {companiesEasy[index].question}
              </h2>
            </div>
          </ReactCardFlip>
        )}
      </div>
      <div className="arrow">
        <div onClick={handleLeftArrowKey} className="leftArrowKey">
          ←
        </div>
        <button onClick={shuffleIndex}>Shuffle</button>
        <div onClick={handleRightArrowKey} className="rightArrowKey">
          →
        </div>
      </div>
    </div>
  );
}

export default EasyCard;
