import Jobs from './Jobs';
import Nav from './Nav';

const HiddenJobs = () => {
  return (
    <>
      <Nav />
      <Jobs hidden={true}/>
    </>
  )
}

export default HiddenJobs
