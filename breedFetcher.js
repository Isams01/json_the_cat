const request = require('request');

const breed = process.argv.slice(2)[0];
const endpoint = `https://api.thecatapi.com/v1/breeds/search?name=${breed}`;

request(endpoint, (error, response, body) => {
  const catData = JSON.parse(body);
  if (response.statusCode !== 200) {
    console.log('Uh oh, something went wrong');
    process.exit(0);
  } else if (body.length === 0) {
    console.log('Breed not found');
  } else {
    console.log(catData[0].description);
  }
});

