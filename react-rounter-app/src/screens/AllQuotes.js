import React from 'react';
import QuoteList from '../components/quotes/QuoteList';

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
  return <QuoteList quotes={dummyData} />;
};

export default AllQuotes;
