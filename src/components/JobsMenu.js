import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const JobsMenu = ({ order=0, onSortOrder }) => {
  const [sortOrder, setSortOrder] = useState(order);
  const handleSortOrder = (e) => {
    setSortOrder(e.target.value);
    // onSortOrder(e.target.value);
  }


  return (
    <Grid container spacing={2} sx={{
      pl: 2,
      pr: 2,
      mb: 1
    }}>
      <Grid item xs={6}>
        <Typography variant='subtitle1'>        
          <Typography variant='subtitle1' sx={{fontWeight: 'bold'}} component='span'>6336</Typography> results
        </Typography>
      </Grid>
      <Grid item xs={6} sx={{
        textAlign: 'right'
      }}>
        <Typography variant='subtitle1' component='span'>Sort by:</Typography>
        <Select
          id="demo-simple-select"
          value={sortOrder}
          onChange={handleSortOrder}
          variant='standard'
          size='small'
          sx={{ml: 1}}
        >
          <MenuItem value={0}>Newest</MenuItem>
          <MenuItem value={1}>Oldest</MenuItem>
        </Select>
      </Grid>
    </Grid>
  )
}

export default JobsMenu;
