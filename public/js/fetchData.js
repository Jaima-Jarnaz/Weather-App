console.log("hello");

// fetch(
//   "http://api.weatherstack.com/current?access_key=5b22e33a9ecae444164b074e39a11a30&query=32-122&units=f"
// ).then((response) => {
//   response.json().then((data) => {
//     console.log(data);
//   });
// });

// fetch("http://localhost:3000/locations").then((response) => {
//   console.log("loactions");
//   response.json().then((data) => {
//     console.log("loactions", data);
//   });
// });

//form

const formSearch = document.getElementById("form");
const inputSearch = document.getElementById("input");
const locationValue = document.getElementById("location");
const temp = document.getElementById("temp");
const weather = document.getElementById("weather");

formSearch.addEventListener("submit", (e) => {
  console.log(inputSearch.value);
  e.preventDefault();

  const inputValue = inputSearch.value;
  fetch(
    "http://api.weatherstack.com/current?access_key=5b22e33a9ecae444164b074e39a11a30&query=" +
      inputValue
  ).then((response) => {
    console.log("address", response);
    response.json().then((data) => {
      console.log("data", data);
      if (data.error) {
        return (locationValue.innerHTML = data.error);
      }
      temp.innerHTML = "Temprature is " + data.current.temperature;
      locationValue.innerHTML = data.location.name;
      weather.innerHTML = "Weather is " + data.current.weather_descriptions[0];
    });
  });
});
