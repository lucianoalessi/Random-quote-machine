import React, { useEffect, useState } from 'react';
import './App.css';

function App() {


  const quoteURL = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"

  const colorsArr = ['#4FC1FF', "#E8B9AB", '#CB769E', '#69995D', '#D2D7DF', '#3AA7A3', '#ECA400', '#006992', '#AFECE7', '#81F499', '#890620', '#B6465F', '#8ACDEA']

  const [quote, setQuote] = useState('Everything you’ve ever wanted is on the other side of fear.');
  const [author, setAuthor] = useState('George Addair');
  const [randomNumber, setRandomNumber] = useState(0);
  const [quotesArray, setQuotesArray] = useState(null);
  const [accentColor, setAccentColor] = useState('#4FC1FF');

  
  const fetchQuotes = async (url) => {
    const response = await fetch(url)
    const parsedJSON = await response.json()
    setQuotesArray(parsedJSON.quotes)
    console.log(parsedJSON)
  }

  useEffect(()=>{
    fetchQuotes(quoteURL)
  },[quoteURL])


  const generateRandomNumber = () =>{ 
    let randomInterger = Math.floor(quotesArray.length * Math.random())
    let randomIntergerColor = Math.floor(colorsArr.length * Math.random())
    setRandomNumber(randomInterger)
    setQuote(quotesArray[randomInterger].quote)
    setAuthor(quotesArray[randomInterger].author)
    setAccentColor(colorsArr[randomIntergerColor])
  }




  return (
    <div className="App">
      <header className='App-header' style={{backgroundColor:accentColor , color:accentColor}}>
        <div id='quote-box'>

        <p id='text'>
          "{quote}"
          </p>

      <p id='author'>
         - {author}
         </p>

        <a id='tweet-quote' href={encodeURI(`http://www.twitter.com/intent/tweet?text=${quote} -${author}`)}>tweet Quote</a>

        <button id='new-quote' onClick={() => generateRandomNumber()}>presionar</button>
        </div>

       
        
      
      </header>
    </div>
  );
}

export default App;
