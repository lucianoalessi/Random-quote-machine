import React, { useEffect, useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

function App() {

  const colorsArr = ['#4FC1FF', "#E8B9AB", '#CB769E', '#69995D', '#D2D7DF', '#3AA7A3', '#ECA400', '#006992', '#AFECE7', '#81F499', '#890620', '#B6465F', '#8ACDEA']  //Array de colores
  
  //iniciamos el estado de quote con el primer valor del array de quotes y lo mismo para el autor.
  const [quote, setQuote] = useState('A person who never made a mistake never tried anything new.'); 
  const [author, setAuthor] = useState('Albert Einstein');
  // iniciamos el estado del numero random con cero.
  const [randomNumber, setRandomNumber] = useState(0);   
  const [quotesArray, setQuotesArray] = useState(null);
  //iniciamos el estado para el color de fondo con el primer color del array
  const [accentColor, setAccentColor] = useState('#4FC1FF');

  //API conArray de Json de quotes

  const quoteURL = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"  

  //Fetch form 1:

  // fetch(quoteURL)
  //   .then((response) => response.json())
  //   .then( (parsedJSON) => {
  //     setQuotesArray(parsedJSON.quotes)
  //   })
  

  //Fetch form 2: 

  const fetchQuotes = async (url) => {
    const response = await fetch(url)
    const parsedJSON = await response.json()
    setQuotesArray(parsedJSON.quotes)
    console.log(parsedJSON)
  }
  
  
 useEffect(()=>{
    fetchQuotes(quoteURL)
  },[quoteURL])


  const generateRandomNumber = () => {     
    
    // creamos un numero random acotado entre cero y el largo del array de quotes.Luego hacemos lo mismo para el array de colores.

    let randomInterger = Math.floor(quotesArray.length * Math.random())  
    let randomIntergerColor = Math.floor(colorsArr.length * Math.random())

    //cambiamos los estados

    setRandomNumber(randomInterger) 
    setQuote(quotesArray[randomInterger].quote) 
    setAuthor(quotesArray[randomInterger].author)
    setAccentColor(colorsArr[randomIntergerColor])
  }


  return (
    
    <html style={{backgroundColor:accentColor , color:accentColor}}>
      <div className="App" >

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
    </html>
  );
}

export default App;
