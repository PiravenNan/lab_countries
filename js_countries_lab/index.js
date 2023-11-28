const list = document.querySelector("#list");
const submittedCountry = document.querySelector("#submittedCountry");
const getCountryByName = async(countryName)=>{
    const response = await fetch("https://restcountries.com/v3.1/name/".concat(countryName)); 
    const data = await response.json();
    return data;

    //console.log(response);
}

const button = document.querySelector("#enter");

document.querySelector("#enter").addEventListener("click", async function (event) {

    event.preventDefault();

    list.innerHTML = "";
    
    const countryData = await getCountryByName(submittedCountry.value);

    const countryName = document.createElement("li");
    countryName.innerText = "Country name: ".concat(countryData[0].name.official);

    const countryCapital = document.createElement("li");
    countryCapital.innerText = "Country Capital(s): "

    const capitalList = document.createElement("ul");
    capitalList.classList.add("capital-list");

    countryData[0].capital.forEach(capitals => {
        const capitalListItem = document.createElement("li");
        capitalListItem.innerText = capitals;
        capitalList.appendChild(capitalListItem);
    });

    countryCapital.appendChild(capitalList);
    //
    
    //
    const countryLanguage = document.createElement("li");
    countryLanguage.innerText = "Country language(s): "

    const languageList = document.createElement("ul");
    languageList.classList.add("language-list");

    Object.keys(countryData[0].languages).forEach(langaugeKey => {
        const languageListItem = document.createElement("li");
        languageListItem.innerText = countryData[0].languages[langaugeKey];
        languageList.appendChild(languageListItem);
    });

    countryLanguage.appendChild(languageList);
    //

    const countryPopulation = document.createElement("li");
    countryPopulation.innerText = "Country Population: ".concat(countryData[0].population);
    

    list.appendChild(countryName);
    list.appendChild(countryCapital);
    list.appendChild(countryLanguage);
    list.appendChild(countryPopulation);

   
});

