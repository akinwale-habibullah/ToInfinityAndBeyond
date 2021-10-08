import { useState } from 'react';
import { connect } from 'react-redux';
import { handleApplyToJob } from '../../actions/jobs';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

function JobDetailDialog({onClose, open, job, dispatch}) {
  const [applLetter, setApplLetter] = useState('');
  const handleInputChange = (e) => {
    setApplLetter(e.target.value);
  }
  const handleApply = () => {
    dispatch(handleApplyToJob(job.id, applLetter))
      .then(() => onClose());
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth='md' fullWidth={true} sx={{'.MuiDialog-paper': {
      height: '60vh'
    }}}>
      <DialogContent sx={{mt: 0, pt: 0, pl: 0, pb: 0}}>
        <Grid container spacing={2} sx={{height: '100%'}}>
          <Grid item xs={12}>
            <Box sx={{
              width: '100%',
              display: 'flex',
              flexDirection: {
                xs: 'column',
                md: 'row'
              },
              height: '100%'
            }}>
              <Box sx={{
                backgroundColor: '#f2f4f7',
                flex: {
                  xs: 1
                },
                pt: 2,
                pl: 2,
                height: '100%'
              }}>
                  <Box sx={{mb: 1}}>
                    <Typography variant='subtitle1'>Apply to</Typography>
                    <Box sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                      <Avatar>IM</Avatar>
                      <Typography variant='body1' sx={{ml: 2}}>{job.company.name}</Typography>
                    </Box>
                  </Box>

                  <Box sx={{mb: 1}}>
                    <Typography variant='subtitle1' sx={{fontWeight: 'bold'}}>Job role</Typography>
                    <Typography variant='body1'>{job.role}</Typography>
                    <Typography variant='body1'>{`${job.salary} ${job.currency}`} Per month</Typography>
                  </Box>

                  <Box sx={{mb: 1}}>
                    <Typography variant='subtitle1' sx={{fontWeight: 'bold'}}>Location</Typography>
                    <Typography variant='body1'>{job.location[0].toUpperCase() + job.location.substr(1,)}</Typography>
                  </Box>

                  <Box sx={{mb: 1}}>
                    <Typography variant='subtitle1' sx={{fontWeight: 'bold'}}>Job type</Typography>
                    <Typography variant='body1'>{job.jobType}</Typography>
                  </Box>

                  <Box sx={{mb: 1}}>
                    <Typography variant='subtitle1' sx={{fontWeight: 'bold'}}>Experience</Typography>
                    <Typography variant='body1'>{job.experience} years or more.</Typography>
                  </Box>

                  <Box sx={{mb: 1}}>
                    <Typography variant='subtitle1' sx={{fontWeight: 'bold'}}>Skills</Typography>
                    <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', alignItems: 'center'}}>
                      {job.skills.map((skill) => (
                        <Chip label={skill} variant="outlined" key={skill} sx={{mb: 1, mr: 1}}/>
                      ))}
                    </Box>
                  </Box>
              </Box>
              <Box sx={{
                flex: {
                  xs: 1,
                  md: 2
                },
                pt: 2,
                pl: 2,
                display: 'flex', flexDirection: 'column', alignItems: 'flex-start'
              }}>
                <Typography variant='subtitle1' >YOUR APPLICATION</Typography>
                <Divider flexItem/>

                <Box sx={{mb: 3, mt: 2}}>
                  <Box>
                    <Typography variant='subtitle2' sx={{fontWeight: 'bold'}}>Akinwale Habib</Typography>
                    <Typography variant='body1'>Software Engineer @ Savics</Typography>
                  </Box>
                </Box>

                <Box sx={{mb: 3}}>
                  <Box>
                    <Typography variant='subtitle2' sx={{fontWeight: 'bold'}}>Your hiring contact is {job.company.contact}</Typography>
                    <Typography variant='body1'>Let them know you are a good fit.</Typography>
                  </Box>
                </Box>

                <Box sx={{mb: 3, width: '100%'}}>
                  <Box>
                    <TextField
                      value={applLetter}
                      onChange={handleInputChange}
                      multiline={true} 
                      placeholder={`Write a note to ${job.company.contact} at ${job.company.name}.`} 
                      fullWidth={true} 
                      rows={10}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions sx={{
        pr: 3
      }}>
        <Button variant='outlined' color='primary'>Close</Button>
        <Button variant='contained' color='primary' disabled={applLetter === ''} onClick={handleApply}>Apply</Button>
      </DialogActions>
    </Dialog>
  );
}

JobDetailDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

const mapStateToProps = ({ jobs }, { id }) => ({
  job: jobs[id]
})

export default connect(mapStateToProps)(JobDetailDialog);
