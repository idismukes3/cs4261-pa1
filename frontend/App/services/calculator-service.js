const axios = require('axios');

const uriBase = 'https://cs4261-pa1.herokuapp.com';

exports.add = async (previous, current) => {
  const response = await axios.post(`${uriBase}/add`, {
    num1: previous,
    num2: current
  });

  return response.data.result;
}