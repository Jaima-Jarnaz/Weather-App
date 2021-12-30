const request = require("request");
const geoCode = require("./utils/geoCode");
const weather = require("./utils/weather");

// const url =
//   "http://api.weatherstack.com/current?access_key=5b22e33a9ecae444164b074e39a11a30&query=37.8267-122,4233&units=f";

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect the weather service");
//   } else if (response.body.error) {
//     console.log("Unable to find the location");
//   } else {
//     const data = response.body;
//     const temprature = data.current.temperature;
//     const feelsLike = data.current.feelslike;
//     console.log("The temprature is ", temprature, "and feels like ", feelsLike);
//   }
// });

// const mapBoxUrl =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/London.json/?access_token=pk.eyJ1IjoiamFpbWEtamFybmF6IiwiYSI6ImNreGg3bjkzaTBsdGQyb21hOWNydnUyNTgifQ.dkTOtbjWN37V68qVE-Uj2Q";

// request({ url: mapBoxUrl, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect mapbox API");
//   } else if (response.body.features.length == 0) {
//     console.log("Unable to find location,try another search");
//   } else {
//     const lattitude = response.body.features[0].center[1];
//     const longgitude = response.body.features[0].center[0];

//     console.log("lattitude ", lattitude, " longgitude ", longgitude);
//   }
// });

geoCode("London", (error, { lattitude, longgitude }) => {
  if (error) return console.log("GeoCode Error Occured", error);

  weather(lattitude, longgitude, (error, responseData) => {
    if (error) return console.log("Weather Error Occured", error);

    console.log(
      "The temprature is " + responseData.temperature + "and feels like ",
      responseData
    );
  });

  console.log("The result of geocode is ", lattitude, longgitude);
});
