import React, { useState } from 'react';
import './App.css';

function App() {

  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [randomNumber, setRandomNumber] = useState(0);


  const generateRandomNumber = () =>{ 
    let randomInterger = Math.floor(quotesArray.length * Math.random())
    setRandomNumber(randomInterger)
  }


  return (
    <div className="App">
      <p>"una gran frase"</p>
      <p> - luciano</p>
    </div>
  );
}

export default App;
