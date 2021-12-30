const request = require("request");

const geoCode = (location, callBack) => {
  const mapBoxUrl =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(location) +
    ".json/?access_token=your_access_key";
  request({ url: mapBoxUrl, json: true }, (error, response) => {
    if (error) {
      callBack("Unable to connect mapbox API", undefined);
    } else if (response.body.features.length === 0) {
      callBack("Unable to find location,try another search", undefined);
    } else {
      callBack(undefined, {
        lattitude: response.body.features[0].center[1],
        longgitude: response.body.features[0].center[0],
      });
    }
  });
};

module.exports = geoCode;
