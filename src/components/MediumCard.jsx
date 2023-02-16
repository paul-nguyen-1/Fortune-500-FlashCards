import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./Card.css";

function MediumCard({ companiesMedium }) {
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
  //shuffle entire arr of obj companiesMedium
  const shuffleIndex = () => {
    companiesMedium.sort(() => Math.random() - 0.5);
    !active && setIndex(Math.floor(Math.random() * 10));
    active ? setFlipCard(true) : setFlipCard(true);
    setCorrectAnswer(true);
    setActive(false);
    setIncorrectAnswer(true);
    //Check if order of array if shuffling -- currently works and shuffles array with correct index
    // console.log(companiesMedium);
  };

  //Activates slider to go up to the next index and flip face card to front
  //restart if it goes past the last index
  const handleRightArrowKey = () => {
    index > 8 ? setIndex(0) : setIndex(index + 1);
    active ? setFlipCard(true) : setFlipCard(true);
    setCorrectAnswer(true);
    setActive(false);
    setIncorrectAnswer(true);
  };

  //Activates the slider to go to the previous index and flip face card to front
  //restart if it goes past the initial index
  const handleLeftArrowKey = () => {
    index < 1 ? setIndex(9) : setIndex(index - 1);
    active ? setFlipCard(true) : setFlipCard(true);
    setCorrectAnswer(true);
    setActive(false);
    setIncorrectAnswer(true);
  };

  //Store value of answer
  const handleAnswer = (e) => {
    setAnswer(e.target.value);
    setIncorrectAnswer(true);
  };

  //Check answer on submit toggle whether or not initializing cards are active depending on answer
  //remember to refactor this lol
  const handleSubmit = (e) => {
    e.preventDefault();
    if (active && initializeStart === true) {
      setFlipCard(true);
      setActive(false);
    } else if (
      answer.toLowerCase() === companiesMedium[index].answer.toLowerCase()
    ) {
      setCorrectAnswer(true);
      setActive(true);
      setIncorrectAnswer(true);
      setFlipCard(true);
    } else {
      setFlipCard(true);
      setActive(false);
      setCorrectAnswer(false);
      setIncorrectAnswer(false);
    }
    setInitializeStart(true);
    e.target.reset();
    setAnswer("");
  };

  return (
    <>
      <div className="card">
        <div
          className="cardContainer"
          onClick={handleSetActive}
          style={{
            border: "5px solid #FFFF00",
            boxShadow: "#FFFF00 2px 2px 2px",
          }}
        >
          {active && correctAnswer ? (
            <h1>Correct!</h1>
          ) : (
            active &&
            initializeStart && (
              <h2>Medium Mode: Click here to test your knowledge!</h2>
            )
          )}
          {!active && (
            <ReactCardFlip isFlipped={flipCard} flipDirection="vertical">
              <div>
                <h1 style={{ display: flipCard && "none" }}>
                  {companiesMedium[index].answer}
                </h1>
              </div>

              <div>
                <h2 style={{ display: !flipCard && "none" }}>
                  {companiesMedium[index].question}
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
    </>
  );
}

export default MediumCard;
