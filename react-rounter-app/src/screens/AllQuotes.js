import React, { useEffect } from 'react';
import QuoteList from '../components/quotes/QuoteList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { getAllQuotes } from '../lib/api';
import NoQuotesFound from '../components/quotes/NoQuotesFound';

const dummyData = [
  {
    id:'q1',
    author: 'sanjeev',
    text: 'Learing react is fun!',
  },
  {
     id:'q2',
    author: 'rahul',
    text: 'Learing react is too fun!',
  },
];
const AllQuotes = () => {

  const { sendRequest, status, data:loadedData, error } = useHttp(getAllQuotes, true);
  useEffect(() => {
    sendRequest()
    
  }, [sendRequest])
  if (status === 'pending') {
    return <div className='centered'>
      <LoadingSpinner/>
    </div>
  }
  if (error) {
    return <p className='centered focused'>{error}</p>
  }
  if (status === 'completed' && (!loadedData || loadedData.length === 0)) {
    return <NoQuotesFound/>
  }
  return <QuoteList quotes={loadedData} />;
};

export default AllQuotes;
