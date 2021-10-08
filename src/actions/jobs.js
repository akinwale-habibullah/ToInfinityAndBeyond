import { RECEIVE_JOBS, FILTER_JOBS } from './types';
import { getJobsByFilter } from '../utils/api';

const receiveJobs = (jobs) => ({
  type: RECEIVE_JOBS,
  jobs
});

const filterJobs = (jobs) => ({
  type: FILTER_JOBS,
  jobs
});

const handleFilterJobs = (filter) => {
  return (dispatch) => {
    return getJobsByFilter(filter).then((value) => {
      dispatch(filterJobs(value));
    });
  }
};

export {
  receiveJobs,
  filterJobs,
  handleFilterJobs,
}