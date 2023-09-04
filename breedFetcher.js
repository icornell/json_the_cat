const request = require('request');
//Write the logic in breedFetcher.js to fetch the Siberian data from the API endpoint using request.
const breedName = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
request(url, (error, response, body) => {
  if (error) {
    console.log('error:', error); // Print the error if one occurred
  } else {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log('Breed not found');
    } else {
      console.log(data[0].description);
    }
  }
});



//module.exports = { fetchBreedDescription };