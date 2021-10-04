import { useState } from 'react';
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
function FilterDialog(props) {
  const { onClose, selectedValue, open } = props;
  const [skills, setSkills] = useState([]);
  const [markets, setMarkets] = useState([]);
  const [jobTypes, setJobTypes] = useState([]);
  const [companySize, setCompanySize] = useState([]);
  const [investmentStage, setInvestmentStage] = useState([]);

  const handleSkillChange = (e, newValue) => {
    if (newValue !== null) {
      setSkills(skills.concat(newValue));
    }
  }
  const handleMarketplaceChange = (e, newValue) => {
    if (newValue !== null) {
      setMarkets(markets.concat(newValue));
    }
  }
  const handleCompanySizeChange = (e, newValue) => {

  }

  const handleClose = () => {
    onClose(selectedValue);
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
                      options={top100Films}
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
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                      <Select
                        value={0}
                        onChange={() => {}}
                        fullWidth
                      >
                        <MenuItem value={0}>Select location</MenuItem>
                        <MenuItem value={10}>All planets</MenuItem>
                        <MenuItem value={20}>Earth</MenuItem>
                        <MenuItem value={30}>Mars</MenuItem>
                      </Select>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Grid container spacing={2}>
                      <Grid item xs={5} md={5}>
                        <Button variant="outlined" endIcon={<CancelIcon />} fullWidth onClick={() => {}}>
                          Skills - {2}
                        </Button>
                      </Grid>
                      <Grid item xs={7} md={7}>
                        <Button variant="outlined" endIcon={<CancelIcon />} fullWidth onClick={() => {}}>
                          Role types - {2}
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
                    <Slider value={[0, 200]} onChange={() => {}} size='small' getAriaLabel={getAriaLabel} valueLabelDisplay='auto' getAriaValueText={valuetext}/>
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={currencies}
                      fullWidth
                      renderInput={(params) => <TextField {...params} label="Currency" />}
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
                      <Slider value={[0, 2]} max={2} min={0} onChange={() => {}} size='small' getAriaLabel={() => '%'} valueLabelDisplay='auto'/>
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
                    action={skills.length > 0 ? <Button variant='text'>Clear</Button> : null}
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
                      onChange={handleSkillChange}
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
                                <IconButton edge="end" aria-label="remove skill">
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

                    <Typography variant='body2' sx={{mt: 2}}>FAVORITES</Typography>
                    {
                      popularSkills.map(popularSkill => (
                        <List dense={true} key={popularSkill}>
                            <ListItem
                              sx={{pl: 0}}
                              secondaryAction={
                                <IconButton edge="end" aria-label="remove skill">
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
                    action={markets.length > 0 ? <Button variant='text'>Clear</Button> : null}
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
                      onChange={handleMarketplaceChange}
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
                                <IconButton edge="end" aria-label="remove skill">
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

                    <Typography variant='body2' sx={{mt: 2}}>FAVORITES</Typography>
                    {
                      popularMarkets.map(popularMarket => (
                        <List dense={true} key={popularMarket}>
                            <ListItem
                              sx={{pl: 0}}
                              secondaryAction={
                                <IconButton edge="end" aria-label="remove skill">
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
                    action={jobTypes.length > 0 ? <Button variant='text'>Clear</Button> : null}
                    sx={{
                    '.MuiCardHeader-title': {
                      fontSize: 'subtitle1.fontSize',
                    }
                  }} />
                  <CardContent>
                  <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {JobTypes.map((jobtype) => {
                      const labelId = `checkbox-list-label-${jobtype}`;

                      return (
                        <ListItem
                          key={jobtype}
                          disablePadding
                        >
                          <ListItemButton role={undefined} onClick={() => {}} dense>
                            <ListItemIcon>
                              <Checkbox
                                edge="start"
                                checked={false}
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
                      <Slider value={[0, 10]} max={10} min={0} onChange={() => {}} size='small' getAriaLabel={() => 'years'} valueLabelDisplay='auto'/>
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
                    action={companySize.length > 0 ? <Button variant='text'>Clear</Button> : null}
                    sx={{
                    '.MuiCardHeader-title': {
                      fontSize: 'subtitle1.fontSize',
                    }
                  }} />
                  <CardContent>
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                      {companySizes.map((companySize) => {
                        const labelId = `checkbox-list-label-${companySize}`;

                        return (
                          <ListItem
                            key={companySize}
                            disablePadding
                          >
                            <ListItemButton role={undefined} onClick={() => {}} dense>
                              <ListItemIcon>
                                <Checkbox
                                  edge="start"
                                  checked={false}
                                  tabIndex={-1}
                                  disableRipple={true}
                                  inputProps={{ 'aria-labelledby': labelId }}
                                />
                              </ListItemIcon>
                              <ListItemText id={labelId} primary={`${companySize} employees`} />
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
                    action={investmentStage.length > 0 ? <Button variant='text'>Clear</Button> : null}
                    sx={{
                    '.MuiCardHeader-title': {
                      fontSize: 'subtitle1.fontSize',
                    }
                  }} />
                  <CardContent>
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                      {investmentStages.map((investmentStage) => {
                        const labelId = `checkbox-list-label-${investmentStage}`;

                        return (
                          <ListItem
                            key={investmentStage}
                            disablePadding
                          >
                            <ListItemButton role={undefined} onClick={() => {}} dense>
                              <ListItemIcon>
                                <Checkbox
                                  edge="start"
                                  checked={false}
                                  tabIndex={-1}
                                  disableRipple={true}
                                  inputProps={{ 'aria-labelledby': labelId }}
                                />
                              </ListItemIcon>
                              <ListItemText id={labelId} primary={`${investmentStage} employees`} />
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
};

const popularSkills = ['Python', 'React.js', 'Node.js', 'Java', 'Ruby on Rails'];
const popularMarkets = ['Healthcare', 'FinTech', 'E-Commerce', 'Education', 'Enterprise Software', 'Marketplaces'];
const JobTypes = ['Full Time', 'Contract', 'Internship', 'Cofounder'];
const companySizes=['1-10', '11-50', '51-200', '201-500', '501-1000', '1001-5000', '5000+'];
const investmentStages = ['Seed Stage', 'Series A', 'Series B', 'Growth', 'IPO', 'Acquired'];
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  {
    title: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  {
    title: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
  { title: 'Casablanca', year: 1942 },
  { title: 'City Lights', year: 1931 },
  { title: 'Psycho', year: 1960 },
  { title: 'The Green Mile', year: 1999 },
  { title: 'The Intouchables', year: 2011 },
  { title: 'Modern Times', year: 1936 },
  { title: 'Raiders of the Lost Ark', year: 1981 },
  { title: 'Rear Window', year: 1954 },
  { title: 'The Pianist', year: 2002 },
  { title: 'The Departed', year: 2006 },
  { title: 'Terminator 2: Judgment Day', year: 1991 },
  { title: 'Back to the Future', year: 1985 },
  { title: 'Whiplash', year: 2014 },
  { title: 'Gladiator', year: 2000 },
  { title: 'Memento', year: 2000 },
  { title: 'The Prestige', year: 2006 },
  { title: 'The Lion King', year: 1994 },
  { title: 'Apocalypse Now', year: 1979 },
  { title: 'Alien', year: 1979 },
  { title: 'Sunset Boulevard', year: 1950 },
  {
    title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
  { title: 'The Great Dictator', year: 1940 },
  { title: 'Cinema Paradiso', year: 1988 },
  { title: 'The Lives of Others', year: 2006 },
  { title: 'Grave of the Fireflies', year: 1988 },
  { title: 'Paths of Glory', year: 1957 },
  { title: 'Django Unchained', year: 2012 },
  { title: 'The Shining', year: 1980 },
  { title: 'WALL·E', year: 2008 },
  { title: 'American Beauty', year: 1999 },
  { title: 'The Dark Knight Rises', year: 2012 },
  { title: 'Princess Mononoke', year: 1997 },
  { title: 'Aliens', year: 1986 },
  { title: 'Oldboy', year: 2003 },
  { title: 'Once Upon a Time in America', year: 1984 },
  { title: 'Witness for the Prosecution', year: 1957 },
  { title: 'Das Boot', year: 1981 },
  { title: 'Citizen Kane', year: 1941 },
  { title: 'North by Northwest', year: 1959 },
  { title: 'Vertigo', year: 1958 },
  {
    title: 'Star Wars: Episode VI - Return of the Jedi',
    year: 1983,
  },
  { title: 'Reservoir Dogs', year: 1992 },
  { title: 'Braveheart', year: 1995 },
  { title: 'M', year: 1931 },
  { title: 'Requiem for a Dream', year: 2000 },
  { title: 'Amélie', year: 2001 },
  { title: 'A Clockwork Orange', year: 1971 },
  { title: 'Like Stars on Earth', year: 2007 },
  { title: 'Taxi Driver', year: 1976 },
  { title: 'Lawrence of Arabia', year: 1962 },
  { title: 'Double Indemnity', year: 1944 },
  {
    title: 'Eternal Sunshine of the Spotless Mind',
    year: 2004,
  },
  { title: 'Amadeus', year: 1984 },
  { title: 'To Kill a Mockingbird', year: 1962 },
  { title: 'Toy Story 3', year: 2010 },
  { title: 'Logan', year: 2017 },
  { title: 'Full Metal Jacket', year: 1987 },
  { title: 'Dangal', year: 2016 },
  { title: 'The Sting', year: 1973 },
  { title: '2001: A Space Odyssey', year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: 'Toy Story', year: 1995 },
  { title: 'Bicycle Thieves', year: 1948 },
  { title: 'The Kid', year: 1921 },
  { title: 'Inglourious Basterds', year: 2009 },
  { title: 'Snatch', year: 2000 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty Python and the Holy Grail', year: 1975 },
];
var currencies = ["", "AFA", "ALL", "DZD", "AOA", "ARS", "AMD", "AWG", "AUD", "AZN", "BSD", "BHD", "BDT", "BBD", "BYR", "BEF", "BZD", "BMD", "BTN", "BTC", "BOB", "BAM", "BWP", "BRL", "GBP", "BND", "BGN", "BIF", "KHR", "CAD", "CVE", "KYD", "XOF", "XAF", "XPF", "CLP", "CNY", "COP", "KMF", "CDF", "CRC", "HRK", "CUC", "CZK", "DKK", "DJF", "DOP", "XCD", "EGP", "ERN", "EEK", "ETB", "EUR", "FKP", "FJD", "GMD", "GEL", "DEM", "GHS", "GIP", "GRD", "GTQ", "GNF", "GYD", "HTG", "HNL", "HKD", "HUF", "ISK", "INR", "IDR", "IRR", "IQD", "ILS", "ITL", "JMD", "JPY", "JOD", "KZT", "KES", "KWD", "KGS", "LAK", "LVL", "LBP", "LSL", "LRD", "LYD", "LTL", "MOP", "MKD", "MGA", "MWK", "MYR", "MVR", "MRO", "MUR", "MXN", "MDL", "MNT", "MAD", "MZM", "MMK", "NAD", "NPR", "ANG", "TWD", "NZD", "NIO", "NGN", "KPW", "NOK", "OMR", "PKR", "PAB", "PGK", "PYG", "PEN", "PHP", "PLN", "QAR", "RON", "RUB", "RWF", "SVC", "WST", "SAR", "RSD", "SCR", "SLL", "SGD", "SKK", "SBD", "SOS", "ZAR", "KRW", "XDR", "LKR", "SHP", "SDG", "SRD", "SZL", "SEK", "CHF", "SYP", "STD", "TJS", "TZS", "THB", "TOP", "TTD", "TND", "TRY", "TMT", "UGX", "UAH", "AED", "UYU", "USD", "UZS", "VUV", "VEF", "VND", "YER", "ZMK"];

export default FilterDialog;
