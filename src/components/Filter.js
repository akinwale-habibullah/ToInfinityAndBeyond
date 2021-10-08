import React, { useState } from 'react';
import { connect } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import CancelIcon from '@mui/icons-material/Cancel';
import FilterListIcon from '@mui/icons-material/FilterList';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import FilterDialog from './dialogs/FilterDialog';

const Filter = ({ jobRoles, skills, markets, currencies, popularSkills, popularMarkets}) => {
  const [roles, setRoles] = useState([]);
  const [location, setLocation] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleChange = (e, name, newValue=null) => {
    switch(name) {
      case 'location':
        setLocation(e.target.value);
        break;
      case 'roles':
        setRoles(newValue)
        break;
      default:
        return;
    }
  }
  const handleOpenDialog = () => {
    setDialogOpen(true)
  }
  const handleCloseDialog = (value) => {
    setDialogOpen(false);
  };

  return (
    <Card sx={{ minWidth: 275, mb: 3 }} raised>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Autocomplete
              multiple
              id="tags-outlined"
              options={jobRoles}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Job role"
                  placeholder="Desired role"
                />
              )}
              value={roles}
              onChange={(e, newValue) => handleChange(e, 'roles', newValue)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
              <Select
                name='location'
                value={location}
                onChange={e => handleChange(e, 'location')}
                fullWidth
              >
              {
                Object.keys(locations).map(lkey => <MenuItem value={lkey} key={lkey}>{locations[lkey]}</MenuItem>)
              }
              </Select>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={5} md={5}>
                <Button variant="outlined" endIcon={<CancelIcon />} fullWidth onClick={handleOpenDialog}>
                  Skills - {2}
                </Button>
              </Grid>
              <Grid item xs={7} md={7}>
                <Button variant="outlined" endIcon={<CancelIcon />} fullWidth onClick={handleOpenDialog}>
                  Role types - {2}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions sx={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Button size="small" startIcon={<FilterListIcon />} endIcon={<ExpandMoreIcon />} onClick={handleOpenDialog}>Filters</Button>
      </CardActions>
      <FilterDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        jobRoles={jobRoles}
        locations={locations}
        selectedValue={{
          roles: roles,
          location: parseInt(location)
        }}
        currencies={Object.keys(currencies).map(ckey => `${currencies[ckey]}`)}
        jobTypesList={jobTypes}
        companySizes={companySizes}
        investmentStages={investmentStages}
        popularMarkets={popularMarkets}
        skillsList={skills}
        marketsList={markets}
        popularSkills={popularSkills}
      />
    </Card>
  );
}

const mapStateToProps = ({jobRoles,skills,markets,currencies,}) => ({ 
  jobRoles,
  skills,
  markets,
  currencies,
  popularMarkets: markets.filter(
    market => market.popular && market.popular === true
    ).map(market => market.title),
  popularSkills: skills.filter(
    skill => skill.popular && skill.popular === true
    ).map(skill => skill.title)
});

export default connect(mapStateToProps)(Filter);

// Chose not to store these in the state, and rather use it as is. 
const locations = {
  0: 'Select location',
  1: 'All planets',
  2: 'Earth',
  3: 'Mars'
};
const jobTypes = [
  'Full Time', 
  'Contract', 
  'Internship', 
  'Cofounder'
];
const companySizes=[
  '1-10', 
  '11-50', 
  '51-200', 
  '201-500', 
  '501-1000', 
  '1001-5000', 
  '5000+'
];
const investmentStages = [
  'Seed Stage', 
  'Series A', 
  'Series B', 
  'Growth', 
  'IPO', 
  'Acquired'
];
