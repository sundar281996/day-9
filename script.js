let request = new XMLHttpRequest();
request.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
);
request.send();
request.onload = function () {
  var data = JSON.parse(request.response);

  // 1) Get all the countries from Asia continent /region using Filter function

  const countriesInAsia = data.filter((country) => country.region === "Asia");
  console.log(countriesInAsia);

  // 2) Get all the countries with a population of less than 2 lakhs using Filter function

  const twoLakhPopulation = data.filter(
    (country) => country.population > 200000
  );
  console.log(twoLakhPopulation);

  // 3) Print the following details name, capital, flag using forEach function

  data.forEach((country) =>
    console.log(
      `Name : ${country.name}, Capital : ${country.capital}, Flag : ${country.flag}`
    )
  );

  // 4) Print the total population of countries using reduce function

  const totalPopulation = data
    .filter((country) => country.region === "Asia")
    .map((country) => country.population)
    .reduce((pop, country) => pop + country);
  console.log(totalPopulation);

  // 5) Print the country which uses US Dollars as currency.
  const countryUsingDollar = data
    .filter((country) => country.currencies[0].code === "USD")
    .map((country) => country.name);
  console.log(countryUsingDollar);
};