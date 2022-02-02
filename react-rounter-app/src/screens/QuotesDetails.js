import React, { Fragment } from 'react';
import { Route, useParams } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
function QuotesDetails(props) {
  const dummyData = [
    {
      id: 'q1',
      author: 'sanjeev',
      text: 'Learing react is fun!',
    },
    {
      id: 'q2',
      author: 'rahul',
      text: 'Learing react is too fun!',
    },
  ];
  const params = useParams();
  const quote = dummyData.find((item) => item.id === params.quotesId);
  if (!quote) {
    return <h1>page not found</h1>;
  }
 
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quotesId}/comments`} exact>
        <Comments />
      </Route>
    </Fragment>
  );
}

export default QuotesDetails;
