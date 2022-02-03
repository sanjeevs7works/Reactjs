import React, { Fragment, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Link, Route, useParams } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import '../index.css';
import { getAllQuotes, getSingleQuote } from '../lib/api';
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
  const { quotesId } = params;
  const match = useRouteMatch();
 
  const { sendRequest, status, data:loadedData, error } = useHttp(getSingleQuote, true);
  useEffect(() => {
    sendRequest(quotesId);
  }, [sendRequest, quotesId]);
  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className='centered focused'>{error}</p>;
  }
  if (!loadedData.text) {
    return <p>No Quotes Found</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={loadedData.text} author={loadedData.author} />
      <Route path={`${match.path}`} exact>
        <div className='centered'>
          <Link className='btn--flat' to={`${match.url}/comments`}>
            Load Comment
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
}

export default QuotesDetails;
