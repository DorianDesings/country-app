const toggleColor = document.getElementById('toggle-color');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');

const formRegion = document.getElementById('form-region');
const searchInput = document.getElementById('search-input');

const drawCountries = countries => {
  cards.textContent = '';
  const fragment = document.createDocumentFragment();
  countries.forEach(country => {
    const card = document.createElement('div');
    card.classList.add('card');
    const cardFlag = document.createElement('img');
    cardFlag.classList.add('card__img');
    cardFlag.src = country.flag;
    card.appendChild(cardFlag);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card__body');

    const cardCountry = document.createElement('h2');
    cardCountry.textContent = country.name;
    cardCountry.classList.add('card__country');

    const cardPopulation = document.createElement('p');
    cardPopulation.classList.add('card__text');
    cardPopulation.textContent = `Population: ${country.population}`;

    const cardRegion = document.createElement('p');
    cardRegion.classList.add('card__text');
    cardRegion.textContent = `Region: ${country.region}`;

    const cardCapital = document.createElement('p');
    cardCapital.classList.add('card__text');
    cardCapital.textContent = `Capital: ${country.capital}`;

    cardBody.appendChild(cardCountry);
    cardBody.appendChild(cardPopulation);
    cardBody.appendChild(cardRegion);
    cardBody.appendChild(cardCapital);
    card.appendChild(cardBody);

    fragment.appendChild(card);
  });

  cards.appendChild(fragment);
};

const fetchData = async (region = '', name = '') => {
  const urlBase = 'https://restcountries.eu/rest/v2';
  let urlEnd = '/all';
  if (region !== '' && region !== 'default') {
    urlEnd = `/region/${region}`;
  } else if (name !== '') {
    urlEnd = `/name/${name}`;
  }
  const request = await fetch(`${urlBase}${urlEnd}`);
  const data = await request.json();
  drawCountries(data);
};

fetchData();

toggleColor.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (toggleIcon.classList.contains('fa-moon')) {
    toggleIcon.classList.replace('fa-moon', 'fa-sun');
    toggleText.textContent = 'Light Mode';
  } else {
    toggleIcon.classList.replace('fa-sun', 'fa-moon');
    toggleText.textContent = 'Dark Mode';
  }
});

searchInput.addEventListener('keyup', e => {
  fetchData('', e.target.value);
});

formRegion.addEventListener('change', e => {
  const region = e.target.options[e.target.selectedIndex].value;
  fetchData(region);
});
