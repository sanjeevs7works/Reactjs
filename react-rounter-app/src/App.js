import { Route, Switch, Redirect } from 'react-router';
import Layout from './components/layout/Layout';
import AllQuotes from './screens/AllQuotes';
import NewQuotes from './screens/NewQuotes';
import QuotesDetails from './screens/QuotesDetails';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes' />
        </Route>
        <Route path='/quotes' exact>
          <AllQuotes />
        </Route>
        <Route path='/quotes/:quotesId' >
          <QuotesDetails />
        </Route>
        <Route path='/new-quotes'>
          <NewQuotes />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
