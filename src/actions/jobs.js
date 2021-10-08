import { RECEIVE_JOBS, FILTER_JOBS, APPLY_TO_JOB } from './types';
import { getJobsByFilter, postJobApplication } from '../utils/api';

const receiveJobs = (jobs) => ({
  type: RECEIVE_JOBS,
  jobs
});

const filterJobs = (jobs) => ({
  type: FILTER_JOBS,
  jobs
});

const applyToJob = (id, letter) => ({
  type: APPLY_TO_JOB,
  id,
  letter
})

const handleFilterJobs = (filter) => {
  return (dispatch) => {
    return getJobsByFilter(filter).then((value) => {
      dispatch(filterJobs(value));
    });
  }
};

const handleApplyToJob = (id, letter) => {
  return (dispatch) => {
    return postJobApplication(id, letter).then(() => {
      dispatch(applyToJob(id, letter));
    })
  }
}

export {
  receiveJobs,
  filterJobs,
  handleFilterJobs,
  handleApplyToJob
}