import { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import HideSourceOutlinedIcon from '@mui/icons-material/HideSourceOutlined';
import JobDetailModal from './dialogs/JobDetailDialog';
import JobApplicationModal from './dialogs/JobApplicationDialog';

const JobCard = ({ job }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [openJobApplyDialog, setOpenJobApplyDialog] = useState(false);
  const handleActionAreaClick = () => {
    setOpenDialog(true);
  }
  const handleDialogClose = () => {
    setOpenDialog(false);
  }
  const handleJobApplyClick = () => {
    setOpenJobApplyDialog(true);
  }
  const handleJobApplyClose = () => {
    setOpenJobApplyDialog(false);
  }

  return (
    <>
      <Card sx={{ minWidth: 275, mb: 2}}>
        <CardHeader 
          title={job.company.name}
          subheader={`${job.company.tagline} - (${job.company.size.replace('-', ' - ')}) employees`}
          avatar={
            <Avatar src={job.company.avatar}
            alt='company logo'/>
          }
          action={
            <IconButton aria-label="settings">
              <KeyboardArrowRightIcon />
            </IconButton>
          }
          sx={{
            '.MuiCardHeader-title': {
              fontSize: 'h6.fontSize',
            },
          }}
        />
        <CardContent>
          <Box sx={{
            width: '100%',
            display: 'flex',
          }}>
          <CardActionArea onClick={handleActionAreaClick}>
              <Typography sx={{ fontWeight: 'medium'}} color="text.secondary" variant='body1'>
                {job.role}
              </Typography>
          </CardActionArea>
          <Button variant='outlined' color='primary' size='small' onClick={handleJobApplyClick}>Apply</Button>
          </Box>
        </CardContent>
        <CardActions sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <Button variant="text" startIcon={<StarOutlineOutlinedIcon />}>
            Save
          </Button>
          <Button variant="text" startIcon={<HideSourceOutlinedIcon />}>
            Hide
          </Button>
        </CardActions>
      </Card>
      <JobDetailModal open={openDialog} onClose={handleDialogClose}/>
      <JobApplicationModal open={openJobApplyDialog} onClose={handleJobApplyClose} />
    </>
  )
}

JobCard.propTypes = {
  job: PropTypes.shape({
    role: PropTypes.string.isRequired,
    company: PropTypes.shape({
      name: PropTypes.string.isRequired,
      tagline: PropTypes.string.isRequired,
      size: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}

export default JobCard;
