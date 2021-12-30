const request = require("request");

const weather = (lattitude, loggitude, callBack) => {
  const url =
    "http://api.weatherstack.com/current?access_key=your_access_key&query=" +
    lattitude +
    "-" +
    loggitude +
    "&units=f";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callBack("Unable to connect the weather service", undefined);
    } else if (response.body.error) {
      callBack("Unable to find the location weather service", undefined);
    } else {
      callBack(undefined, {
        temperature: response.body.current.temperature,
        feelsLike: response.body.current.feelslike,
      });
    }
  });
};

module.exports = weather;
