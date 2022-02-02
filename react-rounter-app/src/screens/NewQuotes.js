import React from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import QuoteForm from '../components/quotes/QuoteForm';

const NewQuotes = () => {
  const history = useHistory();
  const addNewQuoteHandler = (quote) => {
    console.log(quote);
    history.push('/quotes')
  }
  return <QuoteForm onAddQuote={addNewQuoteHandler} />;
};

export default NewQuotes;
