import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import QuoteForm from '../components/quotes/QuoteForm';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';
const NewQuotes = () => {
  const {sendRequest,status}=useHttp(addQuote);
  const history = useHistory();
  useEffect(() => {
    if (status === 'completed') {
      history.push('/quotes');
    }
  }, [status,history]);
  const addNewQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
    
  }
  return <QuoteForm isLoading={status==='pending'} onAddQuote={addNewQuoteHandler} />;
};

export default NewQuotes;
