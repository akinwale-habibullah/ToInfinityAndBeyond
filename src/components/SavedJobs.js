import Jobs from './Jobs';
import Nav from './Nav';

const SavedJobs = () => {
  return (
    <>
      <Nav />
      <Jobs saved={true}/>
    </>
  )
}

export default SavedJobs
