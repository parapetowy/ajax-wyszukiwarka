'use strict';

var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = document.getElementById('countries');
/*var flagContainer = document.getElementById('flag-container');*/

document.getElementById('search').addEventListener('click', searchCountries);

function searchCountries() {
    var countryName = document.getElementById('country-name').value;
    if (!countryName.length) countryName = 'Poland';
    fetch(url + countryName)
        .then(function(resp) {
            return resp.json();
        })
        .then(showCountriesList)
        .catch(function(error) {
            console.log(error.name);
        });
}

function showCountriesList(resp) {
    countriesList.innerHTML = '';
    /*flagContainer.innerHTML = '';*/

    resp.forEach(function(item) {

        var name = document.createElement('div');
        var capital = document.createElement('div');
        var lang = document.createElement('div');
        var pop = document.createElement('div');
        var flagPic = document.createElement('img')

        name.innerText = 'Name - ' + item.name;
        capital.innerText = 'Capital - ' + item.capital;
        lang.innerText = 'Languages - ' + item.languages[0].name;
        pop.innerText = 'Population - ' + item.population;
        flagPic.src = item.flag;

        countriesList.appendChild(name);
        countriesList.appendChild(capital);
        countriesList.appendChild(lang);
        countriesList.appendChild(pop);
        countriesList.appendChild(flagPic);

    });
}