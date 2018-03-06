const request = require('request');

request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=525%20technology%20park%20lake%20mary%20florida&key=${process.env.GOOGLE_API_KEY}`,
  json: true
}, (error, response, body) => {
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
  console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});
