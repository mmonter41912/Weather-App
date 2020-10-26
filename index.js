
let h2 = document.querySelector("h2");

let currentDate = new Date();

let hour = currentDate.getHours();
let minutes = currentDate.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[currentDate.getDay()];

h2.innerHTML = `${day} ${hour}:${minutes}`;



function searchCity(city) {
  let apiKey = "f7bcaae56975747b83d88801e136e5f9";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=
  ${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "f7bcaae56975747b83d88801e136e5f9";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayWeatherCondition);
  //position.coords.latitude
  //position.coords.longitude
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

let currentLocation = document.querySelector("#currentLocationButton");
currentLocation.addEventListener("click", getCurrentLocation);



function displayWeatherCondition(response) {
let temperatureElement = document.querySelector("#tempNumber");
let cityElement = document.querySelector("#city");
let descriptionElement = document.querySelector ("#discription");
let humidityElement = document.querySelector("#humidity");
let windElement = document.querySelector("#wind");
let dateElement = document.querySelector("#date");

temperatureElement.innerHTML = Math.round(response.data.main.temp);
cityElement.innerHTML = response.data.name;
descriptionElement.innerHTML = response.data.weather[0].description;
humidityElement.innerHTML = response.data.main.humidity;
windElement.innerHTML = Math.round(response.data.wind.speed);
dateElement.innerHTML = formatDate(response.data.dt * 1000);

}




let apiKey = "f7bcaae56975747b83d88801e136e5f9";
let city = "San Francisco";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=
  ${city}&appid=${apiKey}&units=imperial`;
axios.get(apiUrl).then(displayWeatherCondition);