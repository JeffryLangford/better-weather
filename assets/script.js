// grabbing search params
var searchBtnEl = document.getElementById("search");
var currentEl = document.getElementById("weather-now-results");

// grabbing current elements to append to
var cityNameEl = document.getElementById("city-name");
var tempEl = document.getElementById("temp");
var windEl = document.getElementById("wind");
var humidityEl = document.getElementById("humidity");
var uvIndexEl = document.getElementById("uv-index");

// grabbing 5 day forecast elements to append to

var temp1El = document.getElementById("temp1");
var wind1El = document.getElementById("wind1");
var humidity1El = document.getElementById("humidity1");
var date1El = document.getElementById("date1");

var temp2El = document.getElementById("temp2");
var wind2El = document.getElementById("wind2");
var humidity2El = document.getElementById("humidity2");
var date2El = document.getElementById("date2");

var temp3El = document.getElementById("temp3");
var wind3El = document.getElementById("wind3");
var humidity3El = document.getElementById("humidity3");
var date3El = document.getElementById("date3");

var temp4El = document.getElementById("temp4");
var wind4El = document.getElementById("wind4");
var humidity4El = document.getElementById("humidity4");
var date4El = document.getElementById("date4");

var temp5El = document.getElementById("temp5");
var wind5El = document.getElementById("wind5");
var humidity5El = document.getElementById("humidity5");
var date5El = document.getElementById("date5");

// OPENWEATHERMAPS API
const key = 'aee83f440c38db9ca793f352e3f5a8a7';

// api functinality
const apiHandler = () => {
  // adding previous cities to local storage
  let searchCity = document.getElementById("input").value;
  // totalCities.push(searchCity);
  console.log(searchCity);

  axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&appid=${key}`)
    .then(response => {
    console.log(response);
    let lat = response.data.city.coord.lat;
    let long = response.data.city.coord.lon;

    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${key}`)
      .then(res => {
        // Kelvin to fahrenheit
        let realTemp = Math.floor((res.data.current.temp - 273.15) * 1.8 + 32);

        console.log(res.data)
        cityNameEl.append(`${searchCity} `);
        tempEl.append(realTemp + " F");
        windEl.append(`${res.data.current.wind_speed} mph`);
        humidityEl.append(`${res.data.current.humidity} %`);
        uvIndexEl.append(`${res.data.current.uvi}`);
      });
      
      // first card appending
      date1El.append(`${response.data.list[1].dt}`);
      temp1El.append(`${Math.floor((response.data.list[1].main.temp - 273.15) * 1.8 + 32)}` + " F");
      wind1El.append(`${response.data.list[1].wind.speed} mph`);
      humidity1El.append(`${response.data.list[1].main.humidity} %`);

      // second card appending
      date2El.append(`${response.data.list[2].dt}`);
      temp2El.append(`${Math.floor((response.data.list[2].main.temp - 273.15) * 1.8 + 32)}` + " F");
      wind2El.append(`${response.data.list[2].wind.speed} mph`);
      humidity2El.append(`${response.data.list[2].main.humidity} %`);

      // third card appending
      date3El.append(`${response.data.list[3].dt}`);
      temp3El.append(`${Math.floor((response.data.list[3].main.temp - 273.15) * 1.8 + 32)}` + " F");
      wind3El.append(`${response.data.list[3].wind.speed} mph`);
      humidity3El.append(`${response.data.list[3].main.humidity} %`);

      // fourth card appending
      date4El.append(`${response.data.list[4].dt}`);
      temp4El.append(`${Math.floor((response.data.list[4].main.temp - 273.15) * 1.8 + 32)}` + " F");
      wind4El.append(`${response.data.list[4].wind.speed} mph`);
      humidity4El.append(`${response.data.list[4].main.humidity} %`);

      // fifth card appending
      date5El.append(`${response.data.list[5].dt}`);
      temp5El.append(`${Math.floor((response.data.list[5].main.temp - 273.15) * 1.8 + 32)}` + " F");
      wind5El.append(`${response.data.list[5].wind.speed} mph`);
      humidity5El.append(`${response.data.list[5].main.humidity} %`);
  }).catch(err => console.error(err));
}

// event listener
searchBtnEl.addEventListener("click", apiHandler);