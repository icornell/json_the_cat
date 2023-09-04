const request = require("request");
//Write the logic in breedFetcher.js to fetch the Siberian data from the API endpoint using request.


const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null); //if error, return error value null and the callback function in the index
    } else {
      const data = JSON.parse(body); //parse the body of the response
      if (data.length === 0) {//if the length of the data is 0, return the callback function with the error message and null
        callback("Breed not found", null);
      } else {
        callback(null, data[0].description);//if the length of the data is not 0, return the callback function with the description of the breed
      }
    }
  });
};

module.exports = { fetchBreedDescription };
