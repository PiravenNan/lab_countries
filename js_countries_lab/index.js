const getCountryByName = async(countryName)=>{
    const response = await fetch("https://restcountries.com/v3.1/name/".concat(countryName)); 

    console.log(response);
}

getCountryByName("Australia")