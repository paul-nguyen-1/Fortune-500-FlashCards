import { useState } from "react";
import "./App.css";
import EasyCard from "./components/EasyCard";
import MediumCard from "./components/MediumCard";
import HardCard from "./components/HardCard";

const companiesEasy = [
  {
    id: 1,
    question: "What is the largest E-Commerce Platform/Company?",
    answer: "Amazon",
  },
  {
    id: 2,
    question: "What is the parent company of Google?",
    answer: "Alphabet",
  },
  {
    id: 3,
    question:
      "What phone company has the largest smartphone marketshare in the United States?",
    answer: "Apple",
  },
  {
    id: 4,
    question: "Which company created Visual Studio & Visual Studio Code?",
    answer: "Microsoft",
  },
  {
    id: 5,
    question:
      "Which company is the most popular streaming service in the world?",
    answer: "Netflix",
  },
  {
    id: 6,
    question:
      "Which company is the largest telecommunications company by revenue?",
    answer: "AT&T",
  },
  {
    id: 7,
    question:
      "Which company operates more than 10,500 stores and has its own museum in Arkansas?",
    answer: "Walmart",
  },
  {
    id: 8,
    question: "Which company has a Bull Terrior mascot named Bullseye?",
    answer: "Target",
  },
  {
    id: 9,
    question:
      "Which companies founder was a student at UT Austin and initially ran their business from a dormitory room? Hint: Headquarters is in Round Rock, Texas.",
    answer: "Dell",
  },
  {
    id: 10,
    question:
      "Which companies founder threatened their CEO if they changed the price of their hot dog combo?",
    answer: "Costco",
  },
];

const companiesMedium = [
  {
    id: 1,
    question:
      "Which company was the first to put prizes in their boxes of cereal?",
    answer: "Kellogg",
  },
  {
    id: 2,
    question:
      "Which company is an American luxury department store chain headquartered in Seattle, Washington? Hint: Company Starts with N.",
    answer: "Nordstrom",
  },
  {
    id: 3,
    question:
      "Which company pioneered the paper-to-digital transformation with the invention of PDF?",
    answer: "Adobe",
  },
  {
    id: 4,
    question:
      "Which company is the only domestic airline with a decades-long history of returning capital to Shareholders?",
    answer: "Southwest Airlines",
  },
  {
    id: 5,
    question:
      "Which company is headquartered in Dallas, Texas that designs and manufactures semiconductors and various integrated circuits?",
    answer: "Texas Instruments",
  },
  {
    id: 6,
    question:
      "Which is the second-largest payments network in the global payments industry?",
    answer: "Mastercard",
  },
  {
    id: 7,
    question:
      "Which is the largest payments network in the global payments industry?",
    answer: "Visa",
  },
  {
    id: 8,
    question:
      "Which company is an American retailer of aftermarket automotive parts and accessories. Hint: Originally named Auto Shack.",
    answer: "Autozone",
  },
  {
    id: 9,
    question:
      "Which company is an American e-commerce company based in Boston, Massachusetts that sells furniture and home goods online?",
    answer: "Wayfair",
  },
  {
    id: 10,
    question:
      "Which company is the fastest growing online used car dealer in the United States and is known for its multi-story car vending machines?",
    answer: "Carvana",
  },
];

const companiesHard = [
  {
    id: 1,
    question:
      "Which company was founded in New Albany Ohio, and is an American retail store chain that sells soaps, lotions, fragrances, and candles?",
    answer: "Bath & Body Works",
  },
  {
    id: 2,
    question:
      "Which company is headquarted in Seattle, WA and is an American online travel shopping company for consumer and small business travel?",
    answer: "Expedia Group",
  },
  {
    id: 3,
    question:
      "Which company is the largest beauty retailer in the U.S. providing beauty lovers with cosmetics, fragrance, skin care products, hair care products, and salon services?",
    answer: "Ulta Beauty",
  },
  {
    id: 4,
    question:
      "Which company is an American online retailer of pet food and other pet-related products based in Plantation, Florida?",
    answer: "Chewy",
  },
  {
    id: 5,
    question:
      "Which company is an American sportswear and footwear retailer, with its headquarters in Midtown Manhattan, New York City, and operating in 28 countries?",
    answer: "Foot Locker",
  },
  {
    id: 6,
    question:
      "Which company is an American multinational e-commerce company based in San Jose, California, that facilitates consumer-to-consumer and business-to-consumer sales through its website?",
    answer: "eBay",
  },
  {
    id: 7,
    question:
      "Which company is an American multinational company headquartered in Redwood City, California, that specializes in Internet connection and data centers?",
    answer: "Equinix",
  },
  {
    id: 8,
    question:
      "Which company is a global human resource consulting firm based in Menlo Park and San Ramon, California, founded in 1948?",
    answer: "Robert Half International",
  },
  {
    id: 9,
    question:
      "Which company is an American lingerie, clothing, and beauty retailer known for high visibility marketing and branding, starting with a popular catalog and followed by an annual fashion show with supermodels dubbed Angels.",
    answer: "Victoria's Secret",
  },
  {
    id: 10,
    question:
      "Which company is an American chain of fast casual restaurants specializing in bowls, tacos and Mission burritos made to order in front of the customer?",
    answer: "Chipotle Mexican Grill",
  },
];

function App() {
  const [easyDifficulty, setEasyDifficulty] = useState(true);
  const [midDifficulty, setMidDifficulty] = useState(false);
  const [hardDifficulty, setHardDifficulty] = useState(false);

  const handleEasyDifficulty = () => {
    setEasyDifficulty(true);
    setMidDifficulty(false);
    setHardDifficulty(false);
  };

  const handleMediumDifficulty = () => {
    setEasyDifficulty(false);
    setMidDifficulty(true);
    setHardDifficulty(false);
  };

  const handleHardDifficulty = () => {
    setEasyDifficulty(false);
    setMidDifficulty(false);
    setHardDifficulty(true);
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
        {midDifficulty && companiesMedium.length}{" "}
        {hardDifficulty && companiesHard.length}{" "}
      </span>
      <div className="difficultyContainer">
        <button onClick={handleEasyDifficulty}>Easy</button>
        <button onClick={handleMediumDifficulty}>Medium</button>
        <button onClick={handleHardDifficulty}>Hard</button>
      </div>
      {easyDifficulty && <EasyCard companiesEasy={companiesEasy} />}
      {midDifficulty && <MediumCard companiesMedium={companiesMedium} />}
      {hardDifficulty && <HardCard companiesHard={companiesHard} />}
    </div>
  );
}

export default App;
