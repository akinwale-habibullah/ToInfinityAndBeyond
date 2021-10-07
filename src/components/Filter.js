import React, { useState } from 'react';
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

export default function BasicCard() {
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
              getOptionLabel={(option) => option.title}
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
          location: location
        }}
        currencies={Object.keys(currencies).map(ckey => `${ckey} - ${currencies[ckey]}`)}
        jobTypesList={jobTypes}
        companySizes={companySizes}
        investmentStages={investmentStages}
        popularMarkets={popularMarkets}
        popularSkills={popularSkills}
      />
    </Card>
  );
}

const jobRoles = [
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
const locations = {
  0: 'Select location',
  1: 'All planets',
  2: 'Earth',
  3: 'Mars'
};
const currencies = {
  "AFA": "Afghan Afghani",
  "ALL": "Albanian Lek",
  "DZD": "Algerian Dinar",
  "AOA": "Angolan Kwanza",
  "ARS": "Argentine Peso",
  "AMD": "Armenian Dram",
  "AWG": "Aruban Florin",
  "AUD": "Australian Dollar",
  "AZN": "Azerbaijani Manat",
  "BSD": "Bahamian Dollar",
  "BHD": "Bahraini Dinar",
  "BDT": "Bangladeshi Taka",
  "BBD": "Barbadian Dollar",
  "BYR": "Belarusian Ruble",
  "BEF": "Belgian Franc",
  "BZD": "Belize Dollar",
  "BMD": "Bermudan Dollar",
  "BTN": "Bhutanese Ngultrum",
  "BTC": "Bitcoin",
  "BOB": "Bolivian Boliviano",
  "BAM": "Bosnia-Herzegovina Convertible Mark",
  "BWP": "Botswanan Pula",
  "BRL": "Brazilian Real",
  "GBP": "British Pound Sterling",
  "BND": "Brunei Dollar",
  "BGN": "Bulgarian Lev",
  "BIF": "Burundian Franc",
  "KHR": "Cambodian Riel",
  "CAD": "Canadian Dollar",
  "CVE": "Cape Verdean Escudo",
  "KYD": "Cayman Islands Dollar",
  "XOF": "CFA Franc BCEAO",
  "XAF": "CFA Franc BEAC",
  "XPF": "CFP Franc",
  "CLP": "Chilean Peso",
  "CNY": "Chinese Yuan",
  "COP": "Colombian Peso",
  "KMF": "Comorian Franc",
  "CDF": "Congolese Franc",
  "CRC": "Costa Rican ColÃ³n",
  "HRK": "Croatian Kuna",
  "CUC": "Cuban Convertible Peso",
  "CZK": "Czech Republic Koruna",
  "DKK": "Danish Krone",
  "DJF": "Djiboutian Franc",
  "DOP": "Dominican Peso",
  "XCD": "East Caribbean Dollar",
  "EGP": "Egyptian Pound",
  "ERN": "Eritrean Nakfa",
  "EEK": "Estonian Kroon",
  "ETB": "Ethiopian Birr",
  "EUR": "Euro",
  "FKP": "Falkland Islands Pound",
  "FJD": "Fijian Dollar",
  "GMD": "Gambian Dalasi",
  "GEL": "Georgian Lari",
  "DEM": "German Mark",
  "GHS": "Ghanaian Cedi",
  "GIP": "Gibraltar Pound",
  "GRD": "Greek Drachma",
  "GTQ": "Guatemalan Quetzal",
  "GNF": "Guinean Franc",
  "GYD": "Guyanaese Dollar",
  "HTG": "Haitian Gourde",
  "HNL": "Honduran Lempira",
  "HKD": "Hong Kong Dollar",
  "HUF": "Hungarian Forint",
  "ISK": "Icelandic KrÃ³na",
  "INR": "Indian Rupee",
  "IDR": "Indonesian Rupiah",
  "IRR": "Iranian Rial",
  "IQD": "Iraqi Dinar",
  "ILS": "Israeli New Sheqel",
  "ITL": "Italian Lira",
  "JMD": "Jamaican Dollar",
  "JPY": "Japanese Yen",
  "JOD": "Jordanian Dinar",
  "KZT": "Kazakhstani Tenge",
  "KES": "Kenyan Shilling",
  "KWD": "Kuwaiti Dinar",
  "KGS": "Kyrgystani Som",
  "LAK": "Laotian Kip",
  "LVL": "Latvian Lats",
  "LBP": "Lebanese Pound",
  "LSL": "Lesotho Loti",
  "LRD": "Liberian Dollar",
  "LYD": "Libyan Dinar",
  "LTL": "Lithuanian Litas",
  "MOP": "Macanese Pataca",
  "MKD": "Macedonian Denar",
  "MGA": "Malagasy Ariary",
  "MWK": "Malawian Kwacha",
  "MYR": "Malaysian Ringgit",
  "MVR": "Maldivian Rufiyaa",
  "MRO": "Mauritanian Ouguiya",
  "MUR": "Mauritian Rupee",
  "MXN": "Mexican Peso",
  "MDL": "Moldovan Leu",
  "MNT": "Mongolian Tugrik",
  "MAD": "Moroccan Dirham",
  "MZM": "Mozambican Metical",
  "MMK": "Myanmar Kyat",
  "NAD": "Namibian Dollar",
  "NPR": "Nepalese Rupee",
  "ANG": "Netherlands Antillean Guilder",
  "TWD": "New Taiwan Dollar",
  "NZD": "New Zealand Dollar",
  "NIO": "Nicaraguan CÃ³rdoba",
  "NGN": "Nigerian Naira",
  "KPW": "North Korean Won",
  "NOK": "Norwegian Krone",
  "OMR": "Omani Rial",
  "PKR": "Pakistani Rupee",
  "PAB": "Panamanian Balboa",
  "PGK": "Papua New Guinean Kina",
  "PYG": "Paraguayan Guarani",
  "PEN": "Peruvian Nuevo Sol",
  "PHP": "Philippine Peso",
  "PLN": "Polish Zloty",
  "QAR": "Qatari Rial",
  "RON": "Romanian Leu",
  "RUB": "Russian Ruble",
  "RWF": "Rwandan Franc",
  "SVC": "Salvadoran ColÃ³n",
  "WST": "Samoan Tala",
  "SAR": "Saudi Riyal",
  "RSD": "Serbian Dinar",
  "SCR": "Seychellois Rupee",
  "SLL": "Sierra Leonean Leone",
  "SGD": "Singapore Dollar",
  "SKK": "Slovak Koruna",
  "SBD": "Solomon Islands Dollar",
  "SOS": "Somali Shilling",
  "ZAR": "South African Rand",
  "KRW": "South Korean Won",
  "XDR": "Special Drawing Rights",
  "LKR": "Sri Lankan Rupee",
  "SHP": "St. Helena Pound",
  "SDG": "Sudanese Pound",
  "SRD": "Surinamese Dollar",
  "SZL": "Swazi Lilangeni",
  "SEK": "Swedish Krona",
  "CHF": "Swiss Franc",
  "SYP": "Syrian Pound",
  "STD": "São Tomé and Príncipe Dobra",
  "TJS": "Tajikistani Somoni",
  "TZS": "Tanzanian Shilling",
  "THB": "Thai Baht",
  "TOP": "Tongan Pa'anga",
  "TTD": "Trinidad & Tobago Dollar",
  "TND": "Tunisian Dinar",
  "TRY": "Turkish Lira",
  "TMT": "Turkmenistani Manat",
  "UGX": "Ugandan Shilling",
  "UAH": "Ukrainian Hryvnia",
  "AED": "United Arab Emirates Dirham",
  "UYU": "Uruguayan Peso",
  "USD": "US Dollar",
  "UZS": "Uzbekistan Som",
  "VUV": "Vanuatu Vatu",
  "VEF": "Venezuelan BolÃvar",
  "VND": "Vietnamese Dong",
  "YER": "Yemeni Rial",
  "ZMK": "Zambian Kwacha"
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
const popularSkills = [
  'Python', 
  'React.js', 
  'Node.js', 
  'Java', 
  'Ruby on Rails'
];
const popularMarkets = [
  'Healthcare', 
  'FinTech', 
  'E-Commerce', 
  'Education', 
  'Enterprise Software', 
  'Marketplaces'
];
