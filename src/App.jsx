import { useState } from "react";
import "./App.css";
import CompanyCard from "./components/CompanyCard";

const companiesEasy = [
  {
    id: 1,
    question: "What is the largest E-Commerce Platform/Company?",
    answer: "Amazon",
    difficulty: "easy",
  },
  {
    id: 2,
    question: "What is the parent company of Google?",
    answer: "Alphabet",
    difficulty: "easy",
  },
  {
    id: 3,
    question:
      "What phone company has the largest smartphone marketshare in the United States?",
    answer: "Apple",
    difficulty: "easy",
  },
  {
    id: 4,
    question: "Which company created Visual Studio & Visual Studio Code?",
    answer: "Microsoft",
    difficulty: "easy",
  },
  {
    id: 5,
    question:
      "Which company is the most popular streaming service in the world?",
    answer: "Netflix",
    difficulty: "easy",
  },
  {
    id: 6,
    question:
      "Which company is the largest telecommunications company by revenue?",
    answer: "AT&T",
    difficulty: "easy",
  },
  {
    id: 7,
    question:
      "Which company operates more than 10,500 stores and has its own museum in Arkansas?",
    answer: "Walmart",
    difficulty: "easy",
  },
  {
    id: 8,
    question: "Which company has a Bull Terrior mascot named Bullseye?",
    answer: "Target",
    difficulty: "easy",
  },
  {
    id: 9,
    question:
      "Which companies founder was a student at UT Austin and initially ran their business from a dormitory room? Hint: Headquarters is in Round Rock, Texas.",
    answer: "Dell",
    difficulty: "easy",
  },
  {
    id: 10,
    question:
      "Which companies founder threatened their CEO if they changed the price of their hot dog combo?",
    answer: "Costco",
    difficulty: "easy",
  },
];

const companiesMedium = [
  {
    id: 1,
    question:
      "Which company was the first to put prizes in their boxes of cereal?",
    answer: "Kellogg",
    difficulty: "medium",
  },
  {
    id: 2,
    question:
      "Which company is an American luxury department store chain headquartered in Seattle, Washington? Hint: Company Starts with N.",
    answer: "Nordstrom",
    difficulty: "medium",
  },
  {
    id: 3,
    question:
      "Which company pioneered the paper-to-digital transformation with the invention of PDF?",
    answer: "Adobe",
    difficulty: "medium",
  },
  {
    id: 4,
    question:
      "Which company is the only domestic airline with a decades-long history of returning capital to Shareholders?",
    answer: "Southwest Airlines",
    difficulty: "medium",
  },
  {
    id: 5,
    question:
      "Which company is headquartered in Dallas, Texas that designs and manufactures semiconductors and various integrated circuits?",
    answer: "Texas Instruments",
    difficulty: "medium",
  },
  {
    id: 6,
    question:
      "Which is the second-largest payments network in the global payments industry?",
    answer: "Mastercard",
    difficulty: "medium",
  },
  {
    id: 7,
    question:
      "Which is the largest payments network in the global payments industry?",
    answer: "Visa",
    difficulty: "medium",
  },
  {
    id: 8,
    question:
      "Which company is an American retailer of aftermarket automotive parts and accessories. Hint: Originally named Auto Shack.",
    answer: "Autozone",
    difficulty: "medium",
  },
  {
    id: 9,
    question:
      "Which company is an American e-commerce company based in Boston, Massachusetts that sells furniture and home goods online?",
    answer: "Wayfair",
    difficulty: "medium",
  },
  {
    id: 10,
    question:
      "Which company is the fastest growing online used car dealer in the United States and is known for its multi-story car vending machines?",
    answer: "Carvana",
    difficulty: "medium",
  },
];

const companiesHard = [
  {
    id: 1,
    question:
      "Which company was founded in New Albany Ohio, and is an American retail store chain that sells soaps, lotions, fragrances, and candles?",
    answer: "Bath & Body Works",
    difficulty: "hard",
  },
  {
    id: 2,
    question:
      "Which company is headquarted in Seattle, WA and is an American online travel shopping company for consumer and small business travel?",
    answer: "Expedia Group",
    difficulty: "hard",
  },
  {
    id: 3,
    question:
      "Which company is the largest beauty retailer in the U.S. providing beauty lovers with cosmetics, fragrance, skin care products, hair care products, and salon services?",
    answer: "Ulta Beauty",
    difficulty: "hard",
  },
  {
    id: 4,
    question:
      "Which company is an American online retailer of pet food and other pet-related products based in Plantation, Florida?",
    answer: "Chewy",
    difficulty: "hard",
  },
  {
    id: 5,
    question:
      "Which company is an American sportswear and footwear retailer, with its headquarters in Midtown Manhattan, New York City, and operating in 28 countries?",
    answer: "Foot Locker",
    difficulty: "hard",
  },
  {
    id: 6,
    question:
      "Which company is an American multinational e-commerce company based in San Jose, California, that facilitates consumer-to-consumer and business-to-consumer sales through its website?",
    answer: "eBay",
    difficulty: "hard",
  },
  {
    id: 7,
    question:
      "Which company is an American multinational company headquartered in Redwood City, California, that specializes in Internet connection and data centers?",
    answer: "Equinix",
    difficulty: "hard",
  },
  {
    id: 8,
    question:
      "Which company is a global human resource consulting firm based in Menlo Park and San Ramon, California, founded in 1948?",
    answer: "Robert Half International",
    difficulty: "hard",
  },
  {
    id: 9,
    question:
      "Which company is an American lingerie, clothing, and beauty retailer known for high visibility marketing and branding, starting with a popular catalog and followed by an annual fashion show with supermodels dubbed Angels.",
    answer: "Victoria's Secret",
    difficulty: "hard",
  },
  {
    id: 10,
    question:
      "Which company is an American chain of fast casual restaurants specializing in bowls, tacos and Mission burritos made to order in front of the customer?",
    answer: "Chipotle Mexican Grill",
    difficulty: "hard",
  },
];

function App() {
  const [easyDifficulty, setEasyDifficulty] = useState(true);
  const [mediumDifficulty, setmediumDifficulty] = useState(false);
  const [hardDifficulty, setHardDifficulty] = useState(false);
  const [flipCard, setFlipCard] = useState(false);

  const handleEasyDifficulty = () => {
    setEasyDifficulty(true);
    setmediumDifficulty(false);
    setHardDifficulty(false);
    setFlipCard(true);
  };

  const handleMediumDifficulty = () => {
    setEasyDifficulty(false);
    setmediumDifficulty(true);
    setHardDifficulty(false);
    setFlipCard(true);
  };

  const handleHardDifficulty = () => {
    setEasyDifficulty(false);
    setmediumDifficulty(false);
    setHardDifficulty(true);
    setFlipCard(true);
  };

  return (
    <div className="App">
      <h1>Guess the Company!</h1>
      <h3>
        How well do you know these Fortune 500 companies? Click a difficulty to
        get started!
      </h3>
      <span>
        {" "}
        Number of Cards: {easyDifficulty && companiesEasy.length}{" "}
        {mediumDifficulty && companiesMedium.length}{" "}
        {hardDifficulty && companiesHard.length}{" "}
      </span>
      <div className="difficultyContainer">
        <button
          onClick={handleEasyDifficulty}
          style={{ border: easyDifficulty ? "2px solid #646cff" : "" }}
        >
          Easy
        </button>
        <button
          onClick={handleMediumDifficulty}
          style={{ border: mediumDifficulty ? "2px solid #646cff" : "" }}
        >
          Medium
        </button>
        <button
          onClick={handleHardDifficulty}
          style={{ border: hardDifficulty ? "2px solid #646cff" : "" }}
        >
          Hard
        </button>
      </div>
      <CompanyCard
        companiesEasy={companiesEasy}
        companiesMedium={companiesMedium}
        companiesHard={companiesHard}
        easyDifficulty={easyDifficulty}
        mediumDifficulty={mediumDifficulty}
        hardDifficulty={hardDifficulty}
        flipCard={flipCard}
        setFlipCard={setFlipCard}
      />
    </div>
  );
}

export default App;
