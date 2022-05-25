// grabbing search button
var searchBtnEl = $("#search");

// OPENWEATHERMAPS API
const weatherApi = '54a0c119a5115d192186a1c181e307e9';

// api functinality
const apiHandler = () => {
    //TODO edit api URL
    let apiUrlSelection = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,daily,alerts&appid=${weatherApi}&units=imperial`;

    // get api with specified information

    //TODO get specified information
  fetch(apiUrlSelection).then(response => {
    if (response.ok) {
      response.json().then(data => {
        displayPlacesWeather(data['hourly'][0]['temp']);
        //console.log(data);
      });
    } else {
      alert("ERROR: LINK NOT FOUND");
    }
  }).catch(err => console.error(err));
}

// event listener
searchBtnEl.on("click", apiHandler);