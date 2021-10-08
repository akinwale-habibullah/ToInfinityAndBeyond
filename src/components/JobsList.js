import * as React from 'react';
import JobCard from './JobCard';

const JobsList = ({ jobs }) => {
  if (!jobs) {
    return null
  }

  return (
    <>
      {
        jobs.map(job => <JobCard key={job.id} job={job} />)
      }
    </>
  );
}

export default JobsList;
