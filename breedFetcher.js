const request = require('request');

const endpoint = 'https://api.thecatapi.com/v1/breeds/search?name=siberian';

request(endpoint, (error, response, body) => {
  const catData = JSON.parse(body);
  if (response.statusCode !== 200) {
    console.log('Uh oh, something went wrong');
    process.exit(0);
  }
  else if (body.length === 0) {
    console.log('Bread not found')
  }
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', JSON.parse(body)); // Print the HTML for the Google homepage.
});

