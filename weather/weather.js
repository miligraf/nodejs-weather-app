const request = require('request');

var getWeather = (lat, lng, callback) => {
  request({
    url: `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=${process.env.WEATHER_API_KEY}&units=imperial`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to weather server.');
    } else if (body.cod === '400') {
      callback('Unable to fetch weather.');
    } else if (body.cod === 401) {
      callback('Invalid API key.');
    } else if (body.cod === 200) {
      callback(undefined, {
        temp: body.main.temp
      });
    }
  });
};

module.exports.getWeather = getWeather;
