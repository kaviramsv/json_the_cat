const request = require('request');
console.log(process.argv.slice(2));
//request('https://api.thecatapi.com/v1/images/search?breed_name=Siberian', (error, response, body) => {

request(`https://api.thecatapi.com/v1/breeds/search?q=${process.argv.slice(2)}`, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  //console.log(typeof body)//string

  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);
  console.log(data[0].description);//breeds.description
})
  ;
//https://docs.thecatapi.com/example-by-breed
//https://api.thecatapi.com/v1/images/search