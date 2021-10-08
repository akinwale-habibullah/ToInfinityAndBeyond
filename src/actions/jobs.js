import { RECEIVE_JOBS, FILTER_JOBS, APPLY_TO_JOB, SAVE_JOB, HIDE_JOB } from './types';
import { getJobsByFilter, postJobApplication, putSaveJob, putHideJob } from '../utils/api';

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
});

const saveJob = (id) => ({
  type: SAVE_JOB,
  id,
});

const hideJob = (id) => ({
  type: HIDE_JOB,
  id,
});

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
};

const handleSaveJob = (id) => {
  return (dispatch) => {
    return putSaveJob(id).then(() => {
      dispatch(saveJob(id));
    })
  }
};

const handleHideJob = (id) => {
  return (dispatch) => {
    return putHideJob(id).then(() => {
      dispatch(hideJob(id));
    })
  }
};

export {
  receiveJobs,
  filterJobs,
  handleFilterJobs,
  handleApplyToJob,
  handleSaveJob,
  handleHideJob
}