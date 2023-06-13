import React, { useEffect, useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

function App() {


  const quoteURL = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"  //Array de objetos de quotes

  const colorsArr = ['#4FC1FF', "#E8B9AB", '#CB769E', '#69995D', '#D2D7DF', '#3AA7A3', '#ECA400', '#006992', '#AFECE7', '#81F499', '#890620', '#B6465F', '#8ACDEA']  //Array de colores

  const [quote, setQuote] = useState('A person who never made a mistake never tried anything new.');    //iniciamos el estado de quote con el primer valor del array de quotes
  const [author, setAuthor] = useState('Albert Einstein'); // lo mismo para el autor
  const [randomNumber, setRandomNumber] = useState(0);  // iniciamos el estado del numero random con cero. 
  const [quotesArray, setQuotesArray] = useState(null);
  const [accentColor, setAccentColor] = useState('#4FC1FF'); //iniciamos el estado para el color de fondo con el primer color del array

  
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
    let randomInterger = Math.floor(quotesArray.length * Math.random())  // creamos un numero random acotado entre cero y el largo del array de quotes.
    let randomIntergerColor = Math.floor(colorsArr.length * Math.random()) // lo mismo para el array de colores 
    setRandomNumber(randomInterger) //cambiamos los estados
    setQuote(quotesArray[randomInterger].quote) 
    setAuthor(quotesArray[randomInterger].author)
    setAccentColor(colorsArr[randomIntergerColor])
  }




  return (
    <body style={{backgroundColor:accentColor , color:accentColor}}>
    <div className="App">

        <div id='quote-box'   style={{color: accentColor}}>
          <h1 id='tittle'>Quote of day:</h1>

        <div id='text'>
          "{quote}"
        </div>
        
        <div id='author'>
          - {author}
        </div>
        
        <div className='buttons'>
         <a id='tweet-quote' href={encodeURI(`http://www.twitter.com/intent/tweet?text=${quote} -${author}`)} style={{backgroundColor:accentColor}}><FontAwesomeIcon icon={faTwitter}/></a>
         <button id='new-quote' onClick={() => generateRandomNumber()} style={{backgroundColor:accentColor}}>New Quote</button>
        </div>

      </div>

      <div className='author'>
          Designed and Coded by
          <br/>
          <a href='https://www.linkedin.com/in/lucianoalessi/' target='_blank'>Luciano A. Alessi</a>
        </div>
         
    </div>
    </body>
  );
}

export default App;
