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

function changeCity() {
  console.log("yes");
  let city = document.querySelector(".city");
  let search = document.querySelector("#search");
  if (!search.value) {
    console.log(search.value);
    city.innerHTML = "Berlin";
  } else {
    city.innerHTML = search.value;
  }
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
if (curMin.length === 1) {
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
