import { useEffect } from 'react';
import { handleInitialData } from './actions/shared';
import { connect } from 'react-redux'
import Home from './components/Home';
import CssBaseline from '@mui/material/CssBaseline';


const App = ({ dispatch }) => {
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch])

  return (
    <>
      <CssBaseline />
      <Home />
    </>
  );
}

export default connect()(App);
