import * as React from 'react';
import JobCard from './JobCard';

const jobs = [
  {
    id: 0,
    company: {
      name: 'Wonderful company',
      tagline: 'Onward to Pluto and beyond',
      numberOfEmployees: '10-20',
      avatar: 'https://mui.com/static/images/cards/contemplative-reptile.jpg'
    },
    role: 'Senior Open Source Developer'
  },
  {
    id: 1,
    company: {
      name: 'Microsoft',
      tagline: 'Best software company in the world',
      numberOfEmployees: '10-20',
      avatar: 'https://mui.com/static/images/cards/contemplative-reptile.jpg'
    },
    role: 'Senior React Developer'
  },
  {
    id: 2,
    company: {
      name: 'Google',
      tagline: 'Used to do no evil',
      numberOfEmployees: '10-20',
      avatar: 'https://mui.com/static/images/cards/contemplative-reptile.jpg'
    },
    role: 'Go Developer'
  }
]

const JobsList = () => {
  return (
    <>
      {
        jobs.map(job => <JobCard key={job.id} job={job} />)
      }
    </>
  );
}

export default JobsList
