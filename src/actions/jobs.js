import { RECEIVE_JOBS } from './types';

const receiveJobs = (jobs) => ({
  type: RECEIVE_JOBS,
  jobs
})

export {
  receiveJobs
}
