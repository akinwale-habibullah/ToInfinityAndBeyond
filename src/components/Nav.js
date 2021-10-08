import * as React from 'react';
import { withRouter } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeOutlined from '@mui/icons-material/HomeOutlined'

const Nav = ({history, location}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => history.push('/')}
          >
            <HomeOutlined />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              ToInfinityAndBeyond
          </Typography>
          <Button color="inherit" onClick={() => history.push('/jobs/applied')}>Jobs Applied</Button>
          <Button color="inherit" onClick={() => history.push('/jobs/saved')}>Saved Jobs</Button>
          <Button color="inherit" onClick={() => history.push('/jobs/hidden')}>Hidden Jobs</Button>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default withRouter(Nav);
