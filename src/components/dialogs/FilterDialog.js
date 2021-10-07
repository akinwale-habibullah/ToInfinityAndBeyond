import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CardHeader from '@mui/material/CardHeader';
import Slider from '@mui/material/Slider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import CancelIcon from '@mui/icons-material/Cancel';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const FilterDialog = ({ 
  onClose, selectedValue, jobRoles, 
  locations, currencies, open, jobTypesList,
  companySizes, investmentStages, popularSkills, popularMarkets
}) => {
  useEffect(() => {
    setRoles(selectedValue.roles.length > 0 ? selectedValue.roles : []);
    setPopSkills(popularSkills);
    setPopMarkets(popularMarkets);
  }, [selectedValue, popularSkills, popularMarkets]);

  const [salary, setSalary] = useState([0,200]);
  const [currency, setCurrency] = useState('USD - US Dollar');
  const [equity, setEquity] = useState([0,2]);
  const [roles, setRoles] = useState([]);
  const [skills, setSkills] = useState([]);
  const [markets, setMarkets] = useState([]);
  const [jobTypes, setJobTypes] = useState([]);
  const [experience, setExperience] = useState([0, 10]);
  const [companySize, setCompanySize] = useState([]);
  const [investmentStage, setInvestmentStage] = useState([]);

  const [popSkills, setPopSkills] = useState([]);
  const [popMarkets, setPopMarkets] = useState([]);

  const handleInputChange = (e, name, newValue=null) => {
    switch (name) {
      case 'roles':
        setRoles(newValue);
        break;
      case 'salary':
        setSalary(newValue);
        break;
      case 'currency':
        setCurrency(newValue);
        break;
      case 'equity':
        setEquity(newValue);
        break;
      case 'skills':
        if (skills.indexOf(newValue) === -1 && newValue !== null) {
          setSkills(skills.concat(newValue));
        }
        break;
      case 'markets':
        if (markets.indexOf(newValue) === -1 && newValue !== null) {
          setMarkets(markets.concat(newValue));
        }
        break;
      case 'jobtypes':
        if (jobTypes.indexOf(newValue) === -1) {
          setJobTypes([].concat(jobTypes, newValue));
        } else {
          const newJobTypes = jobTypes.filter(jobtype => jobtype !== newValue)
          setJobTypes([].concat(newJobTypes))
        }
        break;
      case 'experience':
        setExperience(newValue);
        break;
      case 'companysize':
        if (companySize.indexOf(newValue) === -1) {
          setCompanySize([].concat(companySize, newValue));
        } else {
          const newCompanySize = companySize.filter(compSize => compSize !== newValue);
          setCompanySize(newCompanySize);
        }
        break;
      case 'investmentstages':
        if (investmentStage.indexOf(newValue) === -1) {
          setInvestmentStage([].concat(investmentStage, newValue));
        } else {
          const newInvestmentStage = investmentStage.filter(stage => stage !== newValue);
          setInvestmentStage(newInvestmentStage);
        }
        break;
      case 'popularskills':
        const newPopularSkills = popSkills.filter(skill => skill !== newValue);
        setPopSkills(newPopularSkills);
        setSkills([].concat(skills, newValue));
        break;
      case 'popularmarkets':
        const newPopularMarkets = popMarkets.filter(market => market !== newValue);
        setPopMarkets(newPopularMarkets);
        setMarkets([].concat(markets, newValue));
        break;
      default:
        return;
    }
  }
  const handleRemoveSkill = (value) => {
    if (value) {
      setSkills(skills.filter(skill => skill !== value));
      if (popularSkills.indexOf(value) !== -1) {
        setPopSkills([].concat(popSkills, value));
      }
    } else {
      setSkills([]);
      setPopSkills(popularSkills);
    }
  }
  const handleRemoveMarkets = (value) => {
    if (value) {
      setMarkets(markets.filter(market => market !== value));
      if (popularMarkets.indexOf(value) !== -1) {
        setPopMarkets([].concat(popMarkets, value));
      }
    } else {
      setMarkets([]);
      setPopMarkets(popularMarkets);
    }
  }
  const handleClearJobTypes = () => {
    setJobTypes([]);
  }
  const handleClearCompanySize = () => {
    setCompanySize([]);
  }
  const handleClearInvestmentStages = () => {
    setInvestmentStage([]);
  }
  const handleClose = () => {
    // return object of selected values in dialog
    let value = {}
    onClose(value);
  };
  const getAriaLabel = () => 'Salary range';
  const valuetext = (value) => {
    return `${value}°C`;
  };

  return (
    <Dialog onClose={handleClose} open={open} maxWidth='lg' fullWidth={true} sx={{'.MuiDialog-paper': {
      height: '90vh'
    }}}>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card sx={{ minWidth: 275, mb: 3 }}>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Autocomplete
                      multiple
                      id="tags-outlined"
                      options={jobRoles}
                      getOptionLabel={(option) => option.title}
                      filterSelectedOptions
                      size='small'
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Job role"
                          placeholder="Desired role"
                          size='small'
                        />
                      )}
                      value={roles}
                      onChange={(e, value) => handleInputChange(e, 'roles', value)}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                      <Select
                        value={selectedValue.location ? selectedValue.location : 0}
                        onChange={() => {}}
                        fullWidth
                        size='small'
                      >
                      {
                        Object.keys(locations).map(lkey => <MenuItem value={lkey} key={lkey}>{locations[lkey]}</MenuItem>)
                      }
                      </Select>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Grid container spacing={2}>
                      <Grid item xs={5} md={5}>
                        <Button variant="outlined" endIcon={<CancelIcon />} fullWidth onClick={() => {}}>
                          Skills - {skills.length}
                        </Button>
                      </Grid>
                      <Grid item xs={7} md={7}>
                        <Button variant="outlined" endIcon={<CancelIcon />} fullWidth onClick={() => {}}>
                          Role types - {roles.length}
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={12}>
              <Typography variant='h6' color='secondary' sx={{mb: 2}}>Compensation</Typography>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Card>
                  <CardHeader title='Salary' subheader='$0k - $200k+' sx={{
                    '.MuiCardHeader-title': {
                      fontSize: 'subtitle1.fontSize',
                    }
                  }} />
                  <CardContent>
                    <Slider 
                      size='small' 
                      value={salary}
                      min={0} max={200}
                      onChange={(e, value) => handleInputChange(e, 'salary', value)}
                      getAriaLabel={getAriaLabel}
                      valueLabelDisplay='auto'
                      getAriaValueText={valuetext}
                    />
                    <Autocomplete
                      disablePortal
                      id='combo-box-demo'
                      value={currency}
                      onChange={(e, value) => handleInputChange(e, 'currency', value)}
                      options={currencies}
                      fullWidth
                      renderInput={(params) => <TextField {...params} label="Currency" size='small'/>}
                    />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card>
                    <CardHeader title='Equity' subheader='0% - 2%+' sx={{
                      '.MuiCardHeader-title': {
                        fontSize: 'subtitle1.fontSize',
                      }
                    }} />
                    <CardContent>
                      <Slider 
                        value={equity} 
                        max={2} 
                        min={0} 
                        step={0.1} 
                        onChange={(e, newValue) => handleInputChange(e, 'equity', newValue)} 
                        size='small' 
                        getAriaLabel={() => '%'} 
                        valueLabelDisplay='auto'/>
                    </CardContent>
                  </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={12}>
              <Typography variant='h6' color='secondary' sx={{mb: 2}}>Areas of Interest</Typography>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Card sx={{border: 'solid thin', borderColor: 'primary.main'}}>
                  <CardHeader 
                    title='Skills'
                    action={skills.length > 0 ? <Button variant='text' onClick={() => handleRemoveSkill()}>Clear</Button> : null}
                    sx={{
                    '.MuiCardHeader-title': {
                      fontSize: 'subtitle1.fontSize',
                    }
                  }} />
                  <CardContent>
                    <Autocomplete
                      key={true}
                      disablePortal
                      id="combo-box-demo"
                      options={currencies}
                      fullWidth
                      size='small'
                      onChange={(e, value) => handleInputChange(e, 'skills', value)}
                      inputValue=''
                      clearOnBlur={true}
                      renderInput={(params) => <TextField {...params} label="Skill" />}
                      sx={{mb: 2}}
                    />

                    {skills.length > 0 && <Typography variant='body2' sx={{pb: 0, mb: 0}}>SELECTED</Typography>}
                    {
                      skills.map(skill => (
                        <List dense={true} key={skill}>
                            <ListItem
                              sx={{pl: 0}}
                              secondaryAction={
                                <IconButton edge="end" aria-label="remove skill" onClick={(e) => handleRemoveSkill(skill)}>
                                  <CloseOutlinedIcon />
                                </IconButton>
                              }
                            >
                              <ListItemText
                                primary={skill[0] + skill.substr(1,).toLowerCase()}
                                sx={{m: 0}}
                              />
                            </ListItem>
                        </List>
                      ))
                    }

                    <Typography variant='body2' sx={{mt: 2}}>POPULAR</Typography>
                    {
                      popSkills.map(popularSkill => (
                        <List dense={true} key={popularSkill}>
                            <ListItem
                              sx={{pl: 0}}
                              secondaryAction={
                                <IconButton edge="end" aria-label="remove skill" onClick={(e) => handleInputChange(e, 'popularskills', popularSkill)}>
                                  <AddOutlinedIcon />
                                </IconButton>
                              }
                            >
                              <ListItemText
                                primary={popularSkill}
                                sx={{m: 0}}
                              />
                            </ListItem>
                        </List>
                      ))
                    }

                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
              <Card>
                  <CardHeader 
                    title='Markets'
                    action={markets.length > 0 ? <Button variant='text' onClick={e => handleRemoveMarkets()}>Clear</Button> : null}
                    sx={{
                    '.MuiCardHeader-title': {
                      fontSize: 'subtitle1.fontSize',
                    }
                  }} />
                  <CardContent>
                    <Autocomplete
                      key={true}
                      disablePortal
                      id="combo-box-demo"
                      options={currencies}
                      fullWidth
                      size='small'
                      onChange={(e, value) => handleInputChange(e, 'markets', value)}
                      inputValue=''
                      clearOnBlur={true}
                      renderInput={(params) => <TextField {...params} label="Market" />}
                      sx={{mb: 2}}
                    />

                    {markets.length > 0 && <Typography variant='body2' sx={{pb: 0, mb: 0}}>SELECTED</Typography>}
                    {
                      markets.map(market => (
                        <List dense={true} key={market}>
                            <ListItem
                              sx={{pl: 0}}
                              secondaryAction={
                                <IconButton edge="end" aria-label="remove skill" onClick={(e) => handleRemoveMarkets(market)}>
                                  <CloseOutlinedIcon />
                                </IconButton>
                              }
                            >
                              <ListItemText
                                primary={market[0].toUpperCase() + market.substr(1,).toLowerCase()}
                                sx={{m: 0}}
                              />
                            </ListItem>
                        </List>
                      ))
                    }

                    <Typography variant='body2' sx={{mt: 2}}>POPULAR</Typography>
                    {
                      popMarkets.map(popularMarket => (
                        <List dense={true} key={popularMarket}>
                            <ListItem
                              sx={{pl: 0}}
                              secondaryAction={
                                <IconButton edge="end" aria-label="remove skill" onClick={e => handleInputChange(e, 'popularmarkets', popularMarket)}>
                                  <AddOutlinedIcon />
                                </IconButton>
                              }
                            >
                              <ListItemText
                                primary={popularMarket}
                                sx={{m: 0}}
                              />
                            </ListItem>
                        </List>
                      ))
                    }

                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={12}>
              <Typography variant='h6' color='secondary' sx={{mb: 2}}>Job Details</Typography>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Card sx={{border: 'solid thin', borderColor: 'primary.main'}}>
                  <CardHeader 
                    title='Job Types'
                    action={jobTypes.length > 0 ? <Button variant='text' onClick={handleClearJobTypes}>Clear</Button> : null}
                    sx={{
                    '.MuiCardHeader-title': {
                      fontSize: 'subtitle1.fontSize',
                    }
                  }} />
                  <CardContent>
                  <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {jobTypesList.map((jobtype) => {
                      const labelId = `checkbox-list-label-${jobtype}`;

                      return (
                        <ListItem
                          key={jobtype}
                          disablePadding
                        >
                          <ListItemButton role={undefined} onClick={(e) => handleInputChange(e, 'jobtypes', jobtype)} dense>
                            <ListItemIcon>
                              <Checkbox
                                edge="start"
                                checked={jobTypes.indexOf(jobtype) !== -1}
                                tabIndex={-1}
                                disableRipple={true}
                                inputProps={{ 'aria-labelledby': labelId }}
                              />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={jobtype} />
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                  </List>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card>
                    <CardHeader title='Required experience' subheader='Filter jobs by minimum years of experience' sx={{
                      '.MuiCardHeader-title': {
                        fontSize: 'subtitle1.fontSize',
                      }
                    }} />
                    <CardContent>
                      <Slider 
                        value={experience} 
                        max={10} 
                        min={0} 
                        onChange={(e, value) => handleInputChange(e, 'experience', value)} 
                        size='small' 
                        getAriaLabel={() => 'years'} 
                        valueLabelDisplay='auto'/>
                    </CardContent>
                  </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={12}>
              <Typography variant='h6' color='secondary' sx={{mb: 2}}>Company Details</Typography>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Card>
                  <CardHeader 
                    title='Company size'
                    action={companySize.length > 0 ? <Button variant='text' onClick={handleClearCompanySize}>Clear</Button> : null}
                    sx={{
                    '.MuiCardHeader-title': {
                      fontSize: 'subtitle1.fontSize',
                    }
                  }} />
                  <CardContent>
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                      {companySizes.map((compSize) => {
                        const labelId = `checkbox-list-label-${compSize}`;

                        return (
                          <ListItem
                            key={compSize}
                            disablePadding
                          >
                            <ListItemButton role={undefined} onClick={(e) => handleInputChange(e, 'companysize', compSize)} dense>
                              <ListItemIcon>
                                <Checkbox
                                  edge="start"
                                  checked={companySize.indexOf(compSize) !== -1}
                                  tabIndex={-1}
                                  disableRipple={true}
                                  inputProps={{ 'aria-labelledby': labelId }}
                                />
                              </ListItemIcon>
                              <ListItemText id={labelId} primary={`${compSize} employees`} />
                            </ListItemButton>
                          </ListItem>
                        );
                      })}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card>
                  <CardHeader 
                    title='Investment stage'
                    action={investmentStage.length > 0 ? <Button variant='text' onClick={handleClearInvestmentStages}>Clear</Button> : null}
                    sx={{
                    '.MuiCardHeader-title': {
                      fontSize: 'subtitle1.fontSize',
                    }
                  }} />
                  <CardContent>
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                      {investmentStages.map((stage) => {
                        const labelId = `checkbox-list-label-${investmentStage}`;

                        return (
                          <ListItem
                            key={stage}
                            disablePadding
                          >
                            <ListItemButton role={undefined} onClick={e => handleInputChange(e, 'investmentstages', stage)} dense>
                              <ListItemIcon>
                                <Checkbox
                                  edge="start"
                                  checked={investmentStage.indexOf(stage) !== -1}
                                  tabIndex={-1}
                                  disableRipple={true}
                                  inputProps={{ 'aria-labelledby': labelId }}
                                />
                              </ListItemIcon>
                              <ListItemText id={labelId} primary={`${stage} employees`} />
                            </ListItemButton>
                          </ListItem>
                        );
                      })}
                    </List>
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
        <Button variant='text'>Cancel</Button>
        <Button variant='contained' color='primary'>Save changes</Button>
      </DialogActions>
    </Dialog>
  );
}

FilterDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.shape({
    roles: PropTypes.array,
    location: PropTypes.number
  }),
  locations: PropTypes.object.isRequired,
  jobRoles: PropTypes.array.isRequired,
  currencies: PropTypes.array.isRequired,
  jobTypesList: PropTypes.array.isRequired,
  companySizes: PropTypes.array.isRequired,
  popularSkills: PropTypes.array.isRequired,
  popularMarkets: PropTypes.array.isRequired
};

export default FilterDialog;
