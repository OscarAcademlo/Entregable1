import { useState } from "react";

import "./App.css";
import quotes from "./json/users.json";
import QuotesBox from "./components/QuotesBox";
import colors from "./utils/colors";

function App() {
  
  const getRandomElement = (arr) => {
    const random = Math.floor(Math.random() * arr.length);
    return arr[random];
  };
  const quotesRandom = getRandomElement(quotes);
  const colorRandom = getRandomElement(colors);

  const [randomQuotes, setRandomQuotes] = useState(quotesRandom);
  const [randomColors, setRandomColors] = useState(colorRandom);
  const objAppStyle= {
    backgroundColor:randomColors
  }
  const getRandomAll =() => {
    const quotesRandom = getRandomElement(quotes);
  const colorRandom = getRandomElement(colors);
    
  setRandomQuotes(quotesRandom)
  setRandomColors(colorRandom)
  }
  return (
    <div className="App" style={objAppStyle}>
      <QuotesBox 
      randomQuotes={randomQuotes}
       randomColors={randomColors} 
       getRandomAll={getRandomAll}
       />
    </div>
  );
}

export default App;
