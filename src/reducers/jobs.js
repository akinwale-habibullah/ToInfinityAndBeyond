import { RECEIVE_JOBS, FILTER_JOBS } from '../actions/types';

const jobs = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_JOBS:
      return action.jobs;
    case FILTER_JOBS:
      return action.jobs;
    default:
      return state;
  }
}

export default jobs;
