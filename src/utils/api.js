import _ from 'underscore';
// mock asynchronous API calls
const getJobs = () => {
  return new Promise((res, rej) => {
    return setTimeout(
      () => {
        return res(jobs);
      }, 2000)
  }).then(response => response)
}
const getJobsByFilter = (filter) => {
  // test for every condition and filter list of jobs based on this condition
  return new Promise((res, rej) => {
    return setTimeout(
      () => {
        let filteredJobs = [].concat(jobs);
        if (filter.roles.length > 0) {
          filteredJobs = filteredJobs.filter(job => filter.roles.indexOf(job.role) !== -1);
        }
        if (filter.location !== 'none' && filter.location !== 'all') {
          filteredJobs = filteredJobs.filter(job => job.location === filter.location);
        }
        if (filter.salary && (filter.salary[0] !== 0 && filter.salary[1] !== 0)) {
          filteredJobs = filteredJobs.filter(job => job.salary >= filter.salary[0] && jobs.salary <= filter.salary[1]);
        }
        if (filter.currency) {
          filteredJobs = filteredJobs.filter(job => job.currency === filter.currency);
        }
        if (filter.equity && (filter.equity[0] !== 0 && filter.equity[1] !== 0)) {
          filteredJobs = filteredJobs.filter(job => parseFloat(job.equity) >= parseFloat(filter.equity[0]) && parseFloat(jobs.equity) <= parseFloat(filter.equity[1]));
        }
        if (filter.skills.length > 0) {
          let jobsList = [];
          filter.skills.map(filterSkill => {
            jobsList = jobsList.concat(
              filteredJobs.filter(job => job.skills.indexOf(filterSkill) !== -1)
            );
            return jobsList;
          });

          filteredJobs = _.uniq(jobsList, job => job.id);
        }
        if (filter.markets.length > 0) {
          filteredJobs = filteredJobs.filter(job => filter.markets.indexOf(job.market) !== -1);
        }
        if (filter.jobTypes.length > 0) {
          filteredJobs = filteredJobs.filter(job => filter.jobTypes.indexOf(job.jobType) !== -1);
        }
        if (filter.companySize.length > 0) {
          filteredJobs = filteredJobs.filter(job => filter.companySize.indexOf(job.company.size) !== -1);
        }
        if (filter.investmentStage.length > 0) {
          filteredJobs = filteredJobs.filter(job => filter.investmentStage.indexOf(job.company.investmentStage) !== -1);
        }
        return res(filteredJobs);
      }, 2000)
  }).then(response => response)
}
const getSkills = () => {
  return new Promise((res, rej) => {
    return setTimeout(
      () => {
        return res(skills);
      }, 2000)
  }).then(response => response)
}
const getCurrencies = () => {
  return new Promise((res, rej) => {
    return setTimeout(
      () => {
        return res(currencies);
      }, 2000)
  }).then(response => response);
}
const getJobRoles = () => {
  return new Promise((res, rej) => {
    return setTimeout(
      () => {
        return res(jobRoles);
      }, 2000)
  }).then(response => response)
}
const getMarkets = () => {
  return new Promise((res, rej) => {
    return setTimeout(
      () => {
        return res(markets);
      }, 2000)
  }).then(response => response)
}

const jobs = [
  {
    id: 0,
    date: 'Fri Oct 08 2021',
    role: 'Accountant',
    location: 'mars',
    salary: 100,
    currency: 'US Dollar - USD',
    equity: 0.2,
    market: 'Accommodation',
    jobType: 'Full Time',
    experience: 6,
    skills: ['Data', 'Critical Thinking'],
    company: {
      name: 'Wonderful company',
      tagline: 'Onward to Pluto and beyond',
      size: '10-20',
      avatar: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
      investmentStage: 'Seed Stage'
    },
  },
  {
    id: 1,
    date: 'Fri Oct 08 2021',
    role: 'Accountant',
    location: 'mars',
    salary: 100,
    currency: 'US Dollar - USD',
    equity: 0.2,
    market: 'Accommodation',
    jobType: 'Full Time',
    skills: ['Data'],
    experience: 6,
    company: {
      name: 'Google',
      tagline: 'Used to do no evil',
      size: '5000+',
      avatar: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
      investmentStage: 'Public'
    },
  },
  {
    id: 2,
    date: 'Thur Oct 07 2021',
    role: 'Architect',
    location: 'mars',
    salary: 100,
    currency: 'US Dollar - USD',
    equity: 0.2,
    market: 'Accommodation',
    skills: ['Data'],
    jobType: 'Full Time',
    experience: 6,
    company: {
      name: 'Wonderful company',
      tagline: 'Onward to Pluto and beyond',
      size: '10-20',
      avatar: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
      investmentStage: 'Seed Stage'
    },
  },
  {
    id: 3,
    date: 'Wed Oct 06 2021',
    role: 'Chemical Engineer',
    location: 'mars',
    salary: 100,
    currency: 'US Dollar - USD',
    equity: 0.2,
    market: 'Accommodation',
    skills: [],
    jobType: 'Full Time',
    experience: 6,
    company: {
      name: 'Microsoft',
      tagline: 'Best software company in the world',
      size: '5000+',
      avatar: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
      investmentStage: 'Public'
    },
  }
];
const skills = [
  {title: 'Software Engineering', popular: true},
  {title: 'Data', popular: true}, 
  {title: 'React.js', popular: true}, 
  {title: 'Node.js', popular: false}, 
  {title: 'Java', popular: false}, 
  {title: 'Ruby on Rails', popular: false},
  {title: 'Creativity', popular: false},
  {title: 'Interpersonal', popular: false},
  {title: 'Critical Thinking', popular: false},
  {title: 'Problem solving', popular: false},
  {title: 'Public Speaking', popular: false},
  {title: 'Teamwork', popular: false},
  {title: 'Communication', popular: false},
  {title: 'Collaboration', popular: false},
  {title: 'Accounting', popular: true},
  {title: 'Active Listening', popular: false},
  {title: 'Adaptability', popular: false},
  {title: 'Negotiation', popular: false},
  {title: 'Conflict Resolution', popular: false},
  {title: 'Empathy', popular: false},
  {title: 'Customer Service', popular: true},
  {title: 'Decision Making', popular: false},
  {title: 'Management', popular: true},
  {title: 'Leadership', popular: false},
  {title: 'Organization', popular: false},
  {title: 'Administrative', popular: true}
];
const currencies = {
  "AFA": "Afghan Afghani - AFA",
  "ALL": "Albanian Lek - ALL",
  "DZD": "Algerian Dinar - DZD",
  "AOA": "Angolan Kwanza - AOA",
  "ARS": "Argentine Peso - ARS",
  "AMD": "Armenian Dram - AMD",
  "AWG": "Aruban Florin - AWG",
  "AUD": "Australian Dollar - AUD",
  "AZN": "Azerbaijani Manat - AZN",
  "BSD": "Bahamian Dollar - BSD",
  "BHD": "Bahraini Dinar - BHD",
  "BDT": "Bangladeshi Taka - BDT",
  "BBD": "Barbadian Dollar - BBD",
  "BYR": "Belarusian Ruble - BYR",
  "BEF": "Belgian Franc - BEF",
  "BZD": "Belize Dollar - BZD",
  "BMD": "Bermudan Dollar - BMD",
  "BTN": "Bhutanese Ngultrum - BTN",
  "BTC": "Bitcoin - BTC",
  "BOB": "Bolivian Boliviano - BOB",
  "BAM": "Bosnia-Herzegovina Convertible Mark - BAM",
  "BWP": "Botswanan Pula - BWP",
  "BRL": "Brazilian Real - BRL",
  "GBP": "British Pound Sterling - GBP",
  "BND": "Brunei Dollar - BND",
  "BGN": "Bulgarian Lev - BGN",
  "BIF": "Burundian Franc - BIF",
  "KHR": "Cambodian Riel - KHR",
  "CAD": "Canadian Dollar - CAD",
  "CVE": "Cape Verdean Escudo - CVE",
  "KYD": "Cayman Islands Dollar - KYD",
  "XOF": "CFA Franc BCEAO - XOF",
  "XAF": "CFA Franc BEAC - XAF",
  "XPF": "CFP Franc - XPF",
  "CLP": "Chilean Peso - CLP",
  "CNY": "Chinese Yuan - CNY",
  "COP": "Colombian Peso - COP",
  "KMF": "Comorian Franc - KMF",
  "CDF": "Congolese Franc - CDF",
  "CRC": "Costa Rican ColÃ³n - CRC",
  "HRK": "Croatian Kuna - HRK",
  "CUC": "Cuban Convertible Peso - CUC",
  "CZK": "Czech Republic Koruna - CZK",
  "DKK": "Danish Krone - DKK",
  "DJF": "Djiboutian Franc - DJF",
  "DOP": "Dominican Peso - DOP",
  "XCD": "East Caribbean Dollar - XCD",
  "EGP": "Egyptian Pound - EGP",
  "ERN": "Eritrean Nakfa - ERN",
  "EEK": "Estonian Kroon - EEK",
  "ETB": "Ethiopian Birr - ETB",
  "EUR": "Euro - EUR",
  "FKP": "Falkland Islands Pound - FKP",
  "FJD": "Fijian Dollar - FJD",
  "GMD": "Gambian Dalasi - GMD",
  "GEL": "Georgian Lari - GEL",
  "DEM": "German Mark - DEM",
  "GHS": "Ghanaian Cedi - GHS",
  "GIP": "Gibraltar Pound - GIP",
  "GRD": "Greek Drachma - GRD",
  "GTQ": "Guatemalan Quetzal - GTQ",
  "GNF": "Guinean Franc - GNF",
  "GYD": "Guyanaese Dollar - GYD",
  "HTG": "Haitian Gourde - HTG",
  "HNL": "Honduran Lempira - HNL",
  "HKD": "Hong Kong Dollar - HKD",
  "HUF": "Hungarian Forint - HUF",
  "ISK": "Icelandic KrÃ³na - ISK",
  "INR": "Indian Rupee - INR",
  "IDR": "Indonesian Rupiah - IDR",
  "IRR": "Iranian Rial - IRR",
  "IQD": "Iraqi Dinar - IQD",
  "ILS": "Israeli New Sheqel - ILS",
  "ITL": "Italian Lira - ITL",
  "JMD": "Jamaican Dollar - JMD",
  "JPY": "Japanese Yen - JPY",
  "JOD": "Jordanian Dinar - JOD",
  "KZT": "Kazakhstani Tenge - KZT",
  "KES": "Kenyan Shilling - KES",
  "KWD": "Kuwaiti Dinar - KWD",
  "KGS": "Kyrgystani Som - KGS",
  "LAK": "Laotian Kip - LAK",
  "LVL": "Latvian Lats - LVL",
  "LBP": "Lebanese Pound - LBP",
  "LSL": "Lesotho Loti - LSL",
  "LRD": "Liberian Dollar - LRD",
  "LYD": "Libyan Dinar - LYD",
  "LTL": "Lithuanian Litas - LTL",
  "MOP": "Macanese Pataca - MOP",
  "MKD": "Macedonian Denar - MKD",
  "MGA": "Malagasy Ariary - MGA",
  "MWK": "Malawian Kwacha - MWK",
  "MYR": "Malaysian Ringgit - MYR",
  "MVR": "Maldivian Rufiyaa - MVR",
  "MRO": "Mauritanian Ouguiya - MRO",
  "MUR": "Mauritian Rupee - MUR",
  "MXN": "Mexican Peso - MXN",
  "MDL": "Moldovan Leu - MDL",
  "MNT": "Mongolian Tugrik - MNT",
  "MAD": "Moroccan Dirham - MAD",
  "MZM": "Mozambican Metical - MZM",
  "MMK": "Myanmar Kyat - MMK",
  "NAD": "Namibian Dollar - NAD",
  "NPR": "Nepalese Rupee - NPR",
  "ANG": "Netherlands Antillean Guilder - ANG",
  "TWD": "New Taiwan Dollar - TWD",
  "NZD": "New Zealand Dollar - NZD",
  "NIO": "Nicaraguan CÃ³rdoba - NIO",
  "NGN": "Nigerian Naira - NGN",
  "KPW": "North Korean Won - KPW",
  "NOK": "Norwegian Krone - NOK",
  "OMR": "Omani Rial - OMR",
  "PKR": "Pakistani Rupee - PKR",
  "PAB": "Panamanian Balboa - PAB",
  "PGK": "Papua New Guinean Kina - PGK",
  "PYG": "Paraguayan Guarani - PYG",
  "PEN": "Peruvian Nuevo Sol - PEN",
  "PHP": "Philippine Peso - PHP",
  "PLN": "Polish Zloty - PLN",
  "QAR": "Qatari Rial - QAR",
  "RON": "Romanian Leu - RON",
  "RUB": "Russian Ruble - RUB",
  "RWF": "Rwandan Franc - RWF",
  "SVC": "Salvadoran ColÃ³n - SVC",
  "WST": "Samoan Tala - WST",
  "SAR": "Saudi Riyal - SAR",
  "RSD": "Serbian Dinar - RSD",
  "SCR": "Seychellois Rupee - SCR",
  "SLL": "Sierra Leonean Leone - SLL",
  "SGD": "Singapore Dollar - SGD",
  "SKK": "Slovak Koruna - SKK",
  "SBD": "Solomon Islands Dollar - SBD",
  "SOS": "Somali Shilling - SOS",
  "ZAR": "South African Rand - ZAR",
  "KRW": "South Korean Won - KRW",
  "XDR": "Special Drawing Rights - XDR",
  "LKR": "Sri Lankan Rupee - LKR",
  "SHP": "St. Helena Pound - SHP",
  "SDG": "Sudanese Pound - SDG",
  "SRD": "Surinamese Dollar - SRD",
  "SZL": "Swazi Lilangeni - SZL",
  "SEK": "Swedish Krona - SEK",
  "CHF": "Swiss Franc - CHF",
  "SYP": "Syrian Pound - SYP",
  "STD": "São Tomé and Príncipe Dobra - STD",
  "TJS": "Tajikistani Somoni - TJS",
  "TZS": "Tanzanian Shilling - TZS",
  "THB": "Thai Baht - THB",
  "TOP": "Tongan Pa'anga - TOP",
  "TTD": "Trinidad & Tobago Dollar - TTD",
  "TND": "Tunisian Dinar - TND",
  "TRY": "Turkish Lira - TRY",
  "TMT": "Turkmenistani Manat - TMT",
  "UGX": "Ugandan Shilling - UGX",
  "UAH": "Ukrainian Hryvnia - UAH",
  "AED": "United Arab Emirates Dirham - AED",
  "UYU": "Uruguayan Peso - UYU",
  "USD": "US Dollar - USD",
  "UZS": "Uzbekistan Som - UZS",
  "VUV": "Vanuatu Vatu - VUV",
  "VEF": "Venezuelan BolÃvar - VEF",
  "VND": "Vietnamese Dong - VND",
  "YER": "Yemeni Rial - YER",
  "ZMK": "Zambian Kwach - ZMKa"
};
const jobRoles = [
  'Accountant',
  'Auditor',
  'Actor',
  'Lawyer',
  'Aerospace engineer',
  'Aerospace technician',
  'Agricultural Engineer',
  'Air traffic controller',
  'Anesthesiologist',
  'Architect',
  'Astronomer',
  'Athletic trainer',
  'Baker',
  'Brickmasons',
  'Blockmasons',
  'Bus driver',
  'Cameraman',
  'Butcher',
  'Carpenter',
  'Carpet installer',
  'Cashier',
  'Chef',
  'Chemical Engineer'
];
const markets = [
  {popular: false, title: 'Accommodation'},
  {popular: false, title: 'Accommodation and Food Services'},
  {popular: false, title: 'Administrative and Support Services'},
  {popular: false, title: 'Administrative and Support and Waste Management and Remediation Services'},
  {popular: false, title: 'Agriculture, Forestry, Fishing and Hunting'},
  {popular: false, title: 'Air Transportation'},
  {popular: false, title: 'Ambulatory Health Care Services'},
  {popular: false, title: 'Amusement, Gambling, and Recreation Industries'},
  {popular: false, title: 'Animal Production'},
  {popular: false, title: 'Apparel Manufacturing'},
  {popular: false, title: 'Arts, Entertainment, and Recreation'},
  {popular: false, title: 'Beverage and Tobacco Product Manufacturing'},
  {popular: false, title: 'Broadcasting (except Internet)'},
  {popular: false, title: 'Building Material and Garden Equipment and Supplies Dealers'},
  {popular: false, title: 'Chemical Manufacturing'},
  {popular: false, title: 'Clothing and Clothing Accessories Stores'},
  {popular: true, title: 'Computer and Electronic Product Manufacturing'},
  {popular: false, title: 'Construction'},
  {popular: false, title: 'Construction of Buildings'},
  {popular: false, title: 'Couriers and Messengers'},
  {popular: false, title: 'Credit Intermediation and Related Activities'},
  {popular: false, title: 'Crop Production'},
  {popular: true, title: 'Data Processing, Hosting, and Related Services'},
  {popular: true, title: 'Education and Health Services'},
  {popular: false, title: 'Educational Services'},
  {popular: false, title: 'Electrical Equipment, Appliance, and Component Manufacturing'},
  {popular: false, title: 'Electronics and Appliance Stores'},
  {popular: false, title: 'Fabricated Metal Product Manufacturing'},
  {popular: false, title: 'Finance and Insurance'},
  {popular: false, title: 'Financial Activities'},
  {popular: false, title: 'Fishing, Hunting and Trapping'},
  {popular: false, title: 'Food Manufacturing'},
  {popular: false, title: 'Food Services and Drinking Places'},
  {popular: false, title: 'Food and Beverage Stores'},
  {popular: false, title: 'Forestry and Logging'},
  {popular: false, title: 'Funds, Trusts, and Other Financial Vehicles'},
  {popular: false, title: 'Furniture and Home Furnishings Stores'},
  {popular: false, title: 'Furniture and Related Product Manufacturing'},
  {popular: false, title: 'Gasoline EvStationSharp'},
  {popular: false, title: 'General Merchandise StoresEvStationSharp'},
  {popular: false, title: 'Goods-Producing Industries'},
  {popular: false, title: 'Health Care and Social Assistance'},
  {popular: true, title: 'Health and Personal Care Stores'},
  {popular: false, title: 'Heavy and Civil Engineering Construction'},
  {popular: false, title: 'Hospitals'},
  {popular: false, title: 'Information'},
  {popular: false, title: 'Insurance Carriers and Related Activities'},
  {popular: false, title: 'Internet Publishing and Broadcasting'},
  {popular: false, title: 'Leather and Allied Product Manufacturing'},
  {popular: false, title: 'Leisure and Hospitality'},
  {popular: false, title: 'Lessors of Nonfinancial Intangible Assets (except Copyrighted Works)'},
  {popular: false, title: 'Machinery Manufacturing'},
  {popular: false, title: 'Management of Companies and Enterprises'},
  {popular: false, title: 'Manufacturing'},
  {popular: false, title: 'Merchant Wholesalers, Durable Goods'},
  {popular: false, title: 'Merchant Wholesalers, Nondurable Goods'},
  {popular: false, title: 'Mining (except Oil and Gas)'},
  {popular: false, title: 'Mining, Quarrying, and Oil and Gas Extraction'},
  {popular: false, title: 'Miscellaneous Manufacturing'},
  {popular: false, title: 'Miscellaneous Store Retailers'},
  {popular: false, title: 'Monetary Authorities - Central Bank'},
  {popular: false, title: 'Motion Picture and Sound Recording Industries'},
  {popular: false, title: 'Motor Vehicle and Parts Dealers'},
  {popular: false, title: 'Museums, Historical Sites, and Similar Institutions'},
  {popular: true, title: 'Natural Resources and Mining'},
  {popular: false, title: 'Nonmetallic Mineral Product Manufacturing'},
  {popular: false, title: 'Nonstore Retailers'},
  {popular: false, title: 'Nursing and Residential Care Facilities'},
  {popular: false, title: 'Oil and Gas Extraction'},
  {popular: false, title: 'Other Information Services'},
  {popular: false, title: 'Other Services (except Public Administration)'},
  {popular: false, title: 'Paper Manufacturing'},
  {popular: false, title: 'Performing Arts, Spectator Sports, and Related Industries'},
  {popular: false, title: 'Personal and Laundry Services'},
  {popular: false, title: 'Petroleum and Coal Products Manufacturing'},
  {popular: false, title: 'Pipeline Transportation'},
  {popular: false, title: 'Plastics and Rubber Products Manufacturing'},
  {popular: false, title: 'Postal Service'},
  {popular: false, title: 'Primary Metal Manufacturing'},
  {popular: false, title: 'Printing and Related Support Activities'},
  {popular: false, title: 'Private Households'},
  {popular: false, title: 'Professional and Business Services'},
  {popular: false, title: 'Professional, Scientific, and Technical Services'},
  {popular: false, title: 'Publishing Industries (except Internet)'},
  {popular: false, title: 'Rail Transportation'},
  {popular: false, title: 'Real Estate'},
  {popular: true, title: 'Renewable energy'},
  {popular: false, title: 'Real Estate and Rental and Leasing'},
  {popular: false, title: 'Religious, Grantmaking, Civic, Professional, and Similar Organizations'},
  {popular: false, title: 'Rental and Leasing Services'},
  {popular: false, title: 'Repair and Maintenance'},
  {popular: false, title: 'Retail Trade'},
  {popular: false, title: 'Scenic and Sightseeing Transportation'},
  {popular: false, title: 'Securities, Commodity Contracts, and Other Financial Investments and Related Activities'},
  {popular: false, title: 'Service-Providing Industries'},
  {popular: false, title: 'Social Assistance'},
  {popular: false, title: 'Specialty Trade Contractors'},
  {popular: false, title: 'Sporting Goods, Hobby, Book, and Music Stores'},
  {popular: false, title: 'Support Activities for Agriculture and Forestry'},
  {popular: false, title: 'Support Activities for Mining'},
  {popular: false, title: 'Support Activities for Transportation'},
  {popular: false, title: 'Telecommunications'},
  {popular: false, title: 'Textile Mills'},
  {popular: false, title: 'Textile Product Mills'},
  {popular: false, title: 'Trade, Transportation, and Utilities'},
  {popular: false, title: 'Transit and Ground Passenger Transportation'},
  {popular: false, title: 'Transportation Equipment Manufacturing'},
  {popular: false, title: 'Transportation and Warehousing'},
  {popular: false, title: 'Truck Transportation'},
  {popular: false, title: 'Utilities'},
  {popular: false, title: 'Warehousing and Storage'},
  {popular: false, title: 'Waste Management and Remediation Services'},
  {popular: false, title: 'Water Transportation'},
  {popular: false, title: 'Wholesale Electronic Markets and Agents and Brokers'},
  {popular: false, title: 'Wholesale Trade'},
  {popular: false, title: 'Wood Product Manufacturing'},
];


export {
  getJobs,
  getJobsByFilter,
  getSkills,
  getCurrencies,
  getJobRoles,
  getMarkets
}
