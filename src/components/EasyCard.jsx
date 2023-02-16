import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./Card.css";

function EasyCard({ companiesEasy }) {
  const [initializeStart, setInitializeStart] = useState(true);
  const [answer, setAnswer] = useState("");
  const [active, setActive] = useState(true);
  const [flipCard, setFlipCard] = useState(false);
  const [index, setIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [incorrectAnswer, setIncorrectAnswer] = useState(true);

  //Function to flip card and exit intro card
  const handleSetActive = () => {
    setActive(false);
    active && setFlipCard(true);
    !active && setFlipCard(!flipCard);
    setIncorrectAnswer(true);
  };

  //shuffle card on click and flips face card to front
  const shuffleIndex = () => {
    setIndex(Math.floor(Math.random() * 10));
    active || (!active && setFlipCard(true));
    setCorrectAnswer(true);
    setActive(false);
    setIncorrectAnswer(true);
  };

  //Activates slider to go up to the next index and flip face card to front
  const handleRightArrowKey = () => {
    index > 8 ? setIndex(0) : setIndex(index + 1);
    active || (!active && setFlipCard(true));
    setCorrectAnswer(true);
    setActive(false);
    setIncorrectAnswer(true);
  };

  //Activates the slider to go to the previous index and flip face card to front
  const handleLeftArrowKey = () => {
    index < 1 ? setIndex(9) : setIndex(index - 1);
    active || (!active && setFlipCard(true));
    setCorrectAnswer(true);
    setActive(false);
    setIncorrectAnswer(true);
  };

  //Store value of answer
  const handleAnswer = (e) => {
    setAnswer(e.target.value);
  };

  //Check answer on submit toggle whether or not initializing cards are active depending on answer
  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.toLowerCase() === companiesEasy[index].answer.toLowerCase()) {
      setCorrectAnswer(true);
      setActive(true);
      setInitializeStart(true);
      setIncorrectAnswer(true);
      setFlipCard(true);
    } else {
      setActive(false);
      setCorrectAnswer(false);
      setInitializeStart(true);
      setIncorrectAnswer(false);
      setFlipCard(true);
    }
  };

  return (
    <div className="card">
      <div
        className="cardContainer"
        onClick={handleSetActive}
        style={{ border: "5px solid #39FF14" }}
      >
        {active && correctAnswer ? (
          <h2>Correct!</h2>
        ) : (
          active &&
          initializeStart && (
            <h2>Easy Mode: Click here to test your knowledge!</h2>
          )
        )}
        {!active && (
          <ReactCardFlip isFlipped={flipCard} flipDirection="vertical">
            <div>
              <h1 style={{ display: flipCard && "none" }}>
                {companiesEasy[index].answer}
              </h1>
            </div>

            <div>
              <h2 style={{ display: !flipCard && "none" }}>
                {companiesEasy[index].question}
              </h2>
            </div>
          </ReactCardFlip>
        )}
      </div>
      <div className="inputForm">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Place a Guess Here:"
            onChange={handleAnswer}
            className={incorrectAnswer ? "" : "invalid"}
          ></input>
          <input
            type="submit"
            className={incorrectAnswer ? "" : "invalid"}
          ></input>
        </form>
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
