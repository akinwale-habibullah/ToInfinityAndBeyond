import { RECEIVE_JOBS } from '../actions/types';

const jobs = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_JOBS:
      return action.jobs
    default:
      return state;
  }
}

export default jobs;
