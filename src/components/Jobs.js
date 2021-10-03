import Container from '@mui/material/Container';
import Filter from './Filter';
import JobsMenu from './JobsMenu';
import JobsList from './JobsList';

const Jobs = () => {
  return (
    <>
      <Container>
        <Filter />
        <JobsMenu />
        <JobsList />
      </Container>
    </>
  )
}

export default Jobs
