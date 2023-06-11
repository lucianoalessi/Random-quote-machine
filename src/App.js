import React, { useEffect, useState } from 'react';
import './App.css';

function App() {


  const quoteDBUrl = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"

  const [quote, setQuote] = useState('Everything you’ve ever wanted is on the other side of fear.');
  const [author, setAuthor] = useState('George Addair');
  const [randomNumber, setRandomNumber] = useState(0);
  const [quotesArray, setQuotesArray] = useState(null);

  
  const fetchQuotes = async (url) => {
    const response = await fetch(url)
    const parsedJSON = await response.json()
    setQuotesArray(parsedJSON.quotes)
    console.log(parsedJSON)
  }

  useEffect(()=>{
    fetchQuotes(quoteDBUrl)
  },[quoteDBUrl])



  const generateRandomNumber = () =>{ 
    let randomInterger = Math.floor(quotesArray.length * Math.random())
    setRandomNumber(randomInterger)
  }




  return (
    <div className="App">
      {randomNumber}
      <p>"{quote}"</p>
      <p> - {author} </p>
      <button onClick={() => generateRandomNumber()}>presionar</button>
    </div>
  );
}

export default App;
