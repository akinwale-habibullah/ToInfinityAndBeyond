import Jobs from './Jobs';
import Nav from './Nav';


const AppliedJobs = () => {
  return (
    <>
      <Nav />
      <Jobs applied={true}/>
    </>
  )
}

export default AppliedJobs
