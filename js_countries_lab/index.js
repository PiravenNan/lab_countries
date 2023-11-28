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
    //ist.splice(0,list.length)

    const countryData = await getCountryByName(submittedCountry.value);
    const countryName = countryData[0].name.common;
    console.log(countryName);

   //name, capital, languages and population
});

