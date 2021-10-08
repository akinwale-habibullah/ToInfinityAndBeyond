import { RECEIVE_JOBS, FILTER_JOBS, APPLY_TO_JOB } from '../actions/types';

const jobs = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_JOBS:
      return action.jobs;
    case FILTER_JOBS:
      return action.jobs;
    case APPLY_TO_JOB:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          applied: true,
          letter: action.letter
        }
      }
    default:
      return state;
  }
}

export default jobs;
