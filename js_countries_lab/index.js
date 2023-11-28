const list = document.querySelector("#list");
const button = document.querySelector("#enter");
const allButton = document.querySelector("#findAll");
const submittedCountry = document.querySelector("#submittedCountry");

const getCountryByName = async(countryName)=>{
    const response = await fetch("https://restcountries.com/v3.1/name/".concat(countryName)); 
    const data = await response.json();
    return data;
}

const getAllCountries = async()=>{
    const response = await fetch("https://restcountries.com/v3.1/all"); 
    const data = await response.json();
    return data;
}

document.querySelector("#enter").addEventListener("click", async function (event) {
    event.preventDefault();

    list.innerHTML = "";
    try{
        const countryData = await getCountryByName(submittedCountry.value);
        dislayCountryInfoFromData(countryData[0])
    } catch(e){
        console.error(e);
        const errorMessage = document.createElement("li");
        errorMessage.innerText = "Error: country not found";
        list.appendChild(errorMessage);
    }
})

document.querySelector("#findAll").addEventListener("click", async function (event) {
    event.preventDefault();

    list.innerHTML = "";
    
    const countriesData = await getAllCountries();
    countriesData.forEach(countryData=>{
        dislayCountryInfoFromData(countryData);
        list.appendChild(document.createElement("br"));
    })
    
})

const dislayCountryInfoFromData = (countryData) =>{

    const countryName = document.createElement("li");
    countryName.innerText = "Country name: ".concat(countryData.name.official);

    const countryCapital = document.createElement("li");
    countryCapital.innerText = "Country Capital(s): "

    const capitalList = document.createElement("ul");

    countryData.capital.forEach(capitals => {
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

    Object.keys(countryData.languages).forEach(langaugeKey => {
        const languageListItem = document.createElement("li");
        languageListItem.innerText = countryData.languages[langaugeKey];
        languageList.appendChild(languageListItem);
    });

    countryLanguage.appendChild(languageList);
    //

    const countryPopulation = document.createElement("li");
    countryPopulation.innerText = "Country Population: ".concat(countryData.population);
    

    list.appendChild(countryName);
    list.appendChild(countryCapital);
    list.appendChild(countryLanguage);
    list.appendChild(countryPopulation);

   
};

