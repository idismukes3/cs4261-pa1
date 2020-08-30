const axios = require('axios');

const uriBase = 'https://cs4261-pa1.herokuapp.com';

exports.add = (num1, num2) => {
  axios.post(`${uriBase}/add`, {
    num1,
    num2
  }).then((response) => {
      console.log(response.data.result);
      return;
    });
}