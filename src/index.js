const { default: axios } = require("axios");

(function () {
  let curDate = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  function showTemp(response) {
    console.log(response.data);
    let temp = document.querySelector(".temp");
    temp.innerHTML = Math.round(response.data.main.temp);
  }

  function changeCity(event) {
    event.preventDefault();
    let city = document.querySelector(".city");
    let apiKey = "6f1ef73058d115e56afccee279259142";

    let search = document.querySelector("#search");
    let cityName = search.value;
    if (!cityName) {
      cityName = "Berlin";
    }
    city.innerHTML = cityName;

    let urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    axios.get(urlWeather).then(showTemp);
  }

  function changeTemp(event) {
    event.preventDefault();
    let temp = document.querySelector(".temp");
    if (event.target.className === "fahrenheit") {
      temp.innerHTML = "60";
    } else {
      temp.innerHTML = "14";
    }
  }

  let date = document.querySelector(".date");
  let curMin = curDate.getMinutes();
  if (curMin < 10) {
    curMin = "0" + curMin;
  }

  date.innerHTML =
    days[curDate.getDay()] + " " + curDate.getHours() + ":" + curMin;

  let button = document.querySelector("#search-button");
  button.addEventListener("click", changeCity);

  let fahrenheitLink = document.querySelector(".fahrenheit");
  fahrenheitLink.addEventListener("click", changeTemp);
  let celsiumLink = document.querySelector(".celsium");
  celsiumLink.addEventListener("click", changeTemp);
})();
