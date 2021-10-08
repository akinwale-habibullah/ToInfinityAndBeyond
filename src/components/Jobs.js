import { useState } from 'react';
import { connect } from 'react-redux';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import Filter from './Filter';
import JobsMenu from './JobsMenu';
import JobsList from './JobsList';

const Jobs = ({ jobs, count, applied, saved, hidden }) => {
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
        {
          (applied || saved || hidden ) 
          ? null
          : <Filter />
        }
        {
          (applied || saved || hidden ) 
          ? null
          : <JobsMenu count={count} onSortOrder={sort} order={sortOrder}/>
        }
        {
          jobs.length === 0 && (applied || saved || hidden)
          ? (
              <Box sx={{height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Typography variant='h4' color='secondary'>Job list is empty</Typography>
              </Box>
            )
          : <JobsList jobs={jobs}/>
        }
      </Container>
    </>
  )
}

const mapStateToProps = ({ jobs }, {applied, hidden, saved}) => {
  const state = {};
  state.count= jobs.length;
  if (applied) {
    state.jobs = Object.keys(jobs)
      .map(id => jobs[id])
      .filter(job => job.applied === true)
  } else if (hidden) {
    state.jobs = Object.keys(jobs)
      .map(id => jobs[id])
      .filter(job => job.hidden && job.hidden === true)
  } else if (saved) {
    state.jobs = Object.keys(jobs)
      .map(id => jobs[id])
      .filter(job => job.saved && job.saved === true)
  } else {
    state.jobs = Object.keys(jobs)
      .map(id => jobs[id])
      .filter((job) => {
        let condition = true;
        if (job.applied) {
          condition = false
        }
        if (job.hidden) {
          condition = false
        }
        return condition;
      })
  }

  return state;
};

export default connect(mapStateToProps)(Jobs);
