const request = require('request');

const breed = process.argv.slice(2)[0];

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?name=${breedName}`, (error, response, body) => {
    const catData = JSON.parse(body);
    if (response.statusCode !== 200) {
      callback(error, 'bad response from api');
    } else if (catData.length === 0) {
      callback(error, 'breed not found');
    } else {
      callback(null,catData[0].description);
    }
  });
};



module.exports = { fetchBreedDescription };

