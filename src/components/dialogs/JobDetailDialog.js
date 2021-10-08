import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
function JobDetailDialog({onClose, open, job}) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Dialog open={open} onClose={onClose} maxWidth='lg' fullWidth={true} sx={{'.MuiDialog-paper': {
      height: '90vh'
    }}}>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box sx={{display: 'flex', justifyContent:'space-between', borderBottom: 'solin thin black', bb: 'primary.main'}}>
              <Box sx={{
                'flex': 1,
                xs: {
                  width: '100%',
                  border: 'solid thin red'
                },
                display: 'flex',
                alignItems: 'center',
              }}>
                <Avatar>CM</Avatar>
                <Box sx={{display: 'flex', flexDirection: 'column', ml: 2}}>
                  <Typography variant='h6'>{job.role}</Typography>
                  <Typography variant='subtitle2'>
                    {
                      job.salary
                      ? `${job.salary} ${job.currency} per month.`
                      : 'No salary information'
                    }
                  </Typography>
                </Box>
              </Box>
              <Box sx={{
                flex: {
                  xs: 0,
                  md: 1
                },
                textAlign: 'right',
                visibility: {
                  xs: 'hidden',
                  md: 'visible'
                },
              }}>
                <Button variant='contained' color='primary'>Apply</Button>
              </Box>
            </Box>
            <Divider sx={{mt: 1, mb: 1}}/>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={9}>
                <Card>
                  <CardContent>
                    <Typography variant='body1'>
                      {job.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={3}>
                <Card>
                    <CardContent>
                      <Box sx={{mb: 1}}>
                        <Typography variant='subtitle1' sx={{fontWeight: 'bold'}}>Company</Typography>
                        <Box sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                          <Avatar>{job.company.name.split(' ').map(item => item[0].toUpperCase()).join('')}</Avatar>
                          <Typography variant='body1' sx={{ml: 2}}>{job.company.name}</Typography>
                        </Box>
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
                        <Typography variant='body1'>{job.experience} years.</Typography>
                      </Box>

                      <Box sx={{mb: 1}}>
                        <Typography variant='subtitle1' sx={{fontWeight: 'bold'}}>Skills</Typography>
                        <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', alignItems: 'center'}}>
                          {job.skills.map((skill) => (
                            <Chip label={skill} variant="outlined" key={skill} sx={{mb: 1, mr: 1}}/>
                          ))}
                        </Box>
                      </Box>

                      <Box sx={{mb: 1}}>
                        <Typography variant='subtitle1' sx={{fontWeight: 'bold'}}>Hiring contact</Typography>
                        <Box sx={{
                          display: 'flex', 
                          justifyContent: 'space-between', 
                          alignItems: 'center', 
                          border: 'solid thin', 
                          borderColor: 'secondary.main', 
                          p: 2
                        }}>
                          <Box sx={{display: 'flex', flexDirection: 'column'}}>
                            <Typography variant='subtitle1' sx={{fontWeight: 'bold'}}>{job.company.contact}</Typography>
                          </Box>
                          <Avatar>{job.company.contact.split(' ').map(item => item[0].toUpperCase()).join('')}</Avatar>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions sx={{
        pr: 3
      }}>
        <Button variant='outlined' color='primary'>Close</Button>
        {matches && <Button variant='contained' color='primary'>Apply</Button>}
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
});

export default connect(mapStateToProps)(JobDetailDialog);
