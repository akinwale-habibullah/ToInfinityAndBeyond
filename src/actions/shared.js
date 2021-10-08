import {
  getJobs,
  getJobRoles,
  getSkills,
  getMarkets,
  getCurrencies
} from '../utils/api';
import { receiveJobs } from '../actions/jobs';
import { receiveJobRoles } from '../actions/jobroles';
import { receiveSkills } from '../actions/skills';
import { receiveMarkets } from '../actions/markets';
import { receiveCurrencies } from '../actions/currencies';

// load initial data from API
const handleInitialData = () => {
  console.log('inside handleInitiaData');
  return (dispatch) => {
    return Promise.all([
      getJobs(),
      getJobRoles(),
      getSkills(),
      getMarkets(),
      getCurrencies()
    ])
      .then((values) => {
        const [jobs, jobRoles, skills, markets, currencies] = values;
        dispatch(receiveJobs(jobs));
        dispatch(receiveJobRoles(jobRoles));
        dispatch(receiveSkills(skills));
        dispatch(receiveMarkets(markets));
        dispatch(receiveCurrencies(currencies));
      })
  }
}

export {
  handleInitialData
}
