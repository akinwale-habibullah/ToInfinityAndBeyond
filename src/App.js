import { useEffect } from 'react';
import { handleInitialData } from './actions/shared';
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from './components/Home';
import AppliedJobs from './components/AppliedJobs';
import HiddenJobs from './components/HiddenJobs';
import SavedJobs from './components/SavedJobs';

const App = ({ dispatch }) => {
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch])

  return (
    <Router>
      <Switch>
        <Route path='/' exact={true}>
          <Redirect to='/jobs' />
        </Route>
        <Route path='/jobs' exact={true}>
          <Home />
        </Route>
        <Route path='/jobs/hidden'>
          <HiddenJobs />
        </Route>
        <Route path='/jobs/saved'>
          <SavedJobs />
        </Route>
        <Route path='/jobs/applied'>
          <AppliedJobs />
        </Route>
      </Switch>
    </Router>
  );
}

export default connect()(App);
