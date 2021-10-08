import React, { useState } from 'react';
import { connect } from 'react-redux';
import { handleFilterJobs } from '../actions/jobs';
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

// Chose not to store these in the state, and rather use it as is. 
const locations = {
  'none': 'Select location',
  'all': 'All planets',
  'earth': 'Earth',
  'mars': 'Mars'
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
  'Acquired',
  'Public'
];

const Filter = ({ jobRoles, skills, markets, currencies, popularSkills, popularMarkets, dispatch }) => {
  const [roles, setRoles] = useState([]);
  const [location, setLocation] = useState('none');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [filter, setFilter] = useState({
    roles: [],
    location: 'none',
    salary: [0, 200],
    currency: 'US Dollar - USD',
    equity: [0, 2],
    skills: [],
    markets: [],
    jobTypes: [],
    experience: [0, 10],
    companySize: [],
    investmentStage: [],
  });

  const handleChange = (e, name, newValue=null) => {
    switch(name) {
      case 'location':
        setLocation(e.target.value);
        const locationFilter = {
          ...filter,
          location: e.target.value
        };
        setFilter(locationFilter);

        // filter records
        dispatch(handleFilterJobs(locationFilter));
        break;
      case 'roles':
        setRoles(newValue);
        const rolesFilter = {
          ...filter,
          roles: newValue
        };
        setFilter(rolesFilter);

        // filter records
        dispatch(handleFilterJobs(rolesFilter));
        break;
      default:
        return;
    }
  }
  const handleOpenDialog = () => {
    setDialogOpen(true)
  }
  const handleCloseDialog = (filterObj) => {
    if (filterObj) {
      setFilter(filterObj);
      setRoles(filterObj.roles);
      setLocation(filterObj.location);
      
      // dispatch filterJobs using the values of filter
      dispatch(handleFilterJobs(filterObj));
    }
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
                  Skills - {filter.skills.length}
                </Button>
              </Grid>
              <Grid item xs={7} md={7}>
                <Button variant="outlined" endIcon={<CancelIcon />} fullWidth onClick={handleOpenDialog}>
                  Role types - {filter.roles.length}
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
          location: location
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
