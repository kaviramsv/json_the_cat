const fetchBreedDescription = function(breedName, callback) {

  const request = require('request');

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
   (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
     console.log('body:', body); // Print the HTML for the Google homepage.
    //console.log(typeof body)//string
    const data = JSON.parse(body);
    console.log("data",data);
    // console.log(typeof data);
    // console.log(data[0].description);//breeds.description
    
    let desc =data[0] && data[0].description;


    if (response.statusCode === 200) {//success
      callback(null, desc);
    } else {
      callback(error, null);
    }
  });
};
module.exports = { fetchBreedDescription };