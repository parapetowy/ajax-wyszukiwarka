'use strict';

var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = document.getElementById('countries');
var flagContainer = document.getElementById('flag-container')

document.getElementById('search').addEventListener('click', searchCountries);

function searchCountries() {
    var countryName = document.getElementById('country-name').value;
    if (!countryName.length) countryName = 'Poland';
    fetch(url + countryName)
        .then(function(resp) {
            return resp.json();
        })
        .then(showCountriesList);
}

function showCountriesList(resp) {
    countriesList.innerHTML = '';
    flagContainer.innerHTML = '';

    /*for (var i = 0; i < resp.length; i++) {
        var ul = document.createElement('ul');
        countriesList.appendChild(ul);
        var ulCountry = document.querySelectorAll('#countries ul');
        ulCountry.innerHTML = 'gdsgsdgsdgs';*/
        
        resp.forEach(function(item) {

            var name = document.createElement('li');
            var capital = document.createElement('li');
            var lang = document.createElement('li');
            var pop = document.createElement('li');
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
            flagContainer.appendChild(flagPic);

        });
        

        console.log(ulCountry.length);

    /*};*/


}