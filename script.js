const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia',
  'Bosnia Herzegovina',
  'Botswana',
  'Brazil',
  'British Virgin Islands',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Cayman Islands',
  'Chad',
  'Chile',
  'China',
  'Colombia',
  'Congo',
  'Cook Islands',
  'Costa Rica',
  'Cote D Ivoire',
  'Croatia',
  'Cruise Ship',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Estonia',
  'Ethiopia',
  'Falkland Islands',
  'Faroe Islands',
  'Fiji',
  'Finland',
  'France',
  'French Polynesia',
  'French West Indies',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Greece',
  'Greenland',
  'Grenada',
  'Guam',
  'Guatemala',
  'Guernsey',
  'Guinea',
  'Guinea Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hong Kong',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Isle of Man',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jersey',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kuwait',
  'Kyrgyz Republic',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macau',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Montserrat',
  'Morocco',
  'Mozambique',
  'Namibia',
  'Nepal',
  'Netherlands',
  'Netherlands Antilles',
  'New Caledonia',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palestine',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Puerto Rico',
  'Qatar',
  'Reunion',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Pierre Miquelon',
  'Samoa',
  'San Marino',
  'Satellite',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'South Africa',
  'South Korea',
  'Spain',
  'Sri Lanka',
  'St Kitts Nevis',
  'St Lucia',
  'St Vincent',
  'St. Lucia',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  "Timor L'Este",
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Turks and Caicos',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'United States Minor Outlying Islands',
  'Uruguay',
  'Uzbekistan',
  'Venezuela',
  'Vietnam',
  'Virgin Islands (US)',
  'Yemen',
  'Zambia',
  'Zimbabwe'
];
const search = document.querySelector('input');
const searchButtons = document.querySelectorAll('.search');
const azButton = document.querySelector('.az');
const countriesList = document.querySelector('.countries-list');
const countriesNumber = document.querySelector('span');
const listInfo = document.querySelector('.list-info');

let az = false;

countriesNumber.textContent = `${countries.length}`;

function randomColor() {
  let n = 6,
    hexColor = '#';
  while (n--) {
    hexColor += ((Math.random() * 16) | 0).toString(16);
  }
  return hexColor;
}

function listGenerator(filterCountries) {
  countriesList.innerHTML = '';
  for (i = 0; i < filterCountries.length; i++) {
    let color = randomColor();
    let country = document.createElement('div');
    country.textContent = filterCountries[i];
    country.style.backgroundColor = color;
    country.classList.add('country');
    countriesList.appendChild(country);
  }
  search.addEventListener('keyup', filter);
}

function filter() {
  let searchValue = search.value;
  let countriesFind = countries.filter(country => {
    return country.toUpperCase().includes(searchValue.toUpperCase());
  });

  listGenerator(countriesFind);
  search.value != ''
    ? (listInfo.innerHTML = `${countriesFind.length}/${
        countries.length
      } countries contains <b>${search.value}</b>`)
    : (listInfo.innerHTML = '');
}

function filterStartWith() {
  let searchValue = search.value;
  let countriesStart = countries.filter(country => {
    return country.toUpperCase().startsWith(searchValue.toUpperCase());
  });
  console.log(searchValue);

  listGenerator(countriesStart);
  search.value != ''
    ? (listInfo.innerHTML = `${countriesStart.length}/${
        countries.length
      } countries start with <b>${search.value}</b>`)
    : (listInfo.innerHTML = '');
}

function buttonChecker() {
  searchButtons.forEach(button => {
    button.classList.remove('checked');
  });
  if (this.classList.contains('start')) {
    this.classList.add('checked');
    search.addEventListener('keyup', filterStartWith);
    filterStartWith();
  } else if (this.classList.contains('contains')) {
    this.classList.add('checked');
    search.addEventListener('keyup', filter);
    filter();
  }
}

function sort() {
  const showCountries = document.querySelectorAll('.country');

  let sortCountries = [];
  showCountries.forEach(country => {
    sortCountries.push(country.textContent);
  });
  listGenerator(sortCountries.reverse());
  if (az) {
    az = false;
    azButton.innerHTML = '<i class="fas fa-sort-alpha-down"></i>';
  } else {
    az = true;
    azButton.innerHTML = '<i class="fas fa-sort-alpha-up"></i>';
  }
}

listGenerator(countries);
searchButtons.forEach(button =>
  button.addEventListener('click', buttonChecker)
);
azButton.addEventListener('click', sort);