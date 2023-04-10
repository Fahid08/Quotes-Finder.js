import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Quote() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetchQuote();
  }, []);

  async function fetchQuote() {
    const response = await axios.get('https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json');
    setQuote(response.data.quoteText);
  }

  function handleClick() {
    fetchQuote();
  }

  return (
    <div>
      <p>{quote}</p>
      <button onClick={handleClick}>New quote</button>
    </div>
  );
}

export default Quote;
