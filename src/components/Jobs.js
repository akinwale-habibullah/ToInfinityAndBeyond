import { useState } from 'react';
import { connect } from 'react-redux';
import Container from '@mui/material/Container';
import Filter from './Filter';
import JobsMenu from './JobsMenu';
import JobsList from './JobsList';

const Jobs = ({ jobs, count }) => {
  const [sortOrder, setSortOrder] = useState('asc');
  const sort = (order) => {
    setSortOrder(order);
    
    if (order === 'asc') {
      jobs = jobs.sort((a, b) => a.id-b.id);
    } else {
      jobs = jobs.sort((a, b) => b.id-a.id);
    }
  }

  return (
    <>
      <Container>
        <Filter />
        <JobsMenu count={count} onSortOrder={sort} order={sortOrder}/>
        <JobsList jobs={jobs}/>
      </Container>
    </>
  )
}
const mapStateToProps = ({ jobs }) => ({
  count: jobs.length,
  jobs: Object.keys(jobs)
    .map(id => jobs[id])
    .filter(job => job.applied !== true)
});

export default connect(mapStateToProps)(Jobs);
