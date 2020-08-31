const axios = require("axios");

const uriBase = "https://cs4261-pa1.herokuapp.com";

exports.add = async (previous, current) => {
  const response = await axios.post(`${uriBase}/add`, {
    num1: previous,
    num2: current,
  });

  return response.data.result;
};

exports.subtract = async (previous, current) => {
  const response = await axios.post(`${uriBase}/subtract`, {
    num1: previous,
    num2: current,
  });

  return response.data.result;
};

exports.multiply = async (previous, current) => {
  const response = await axios.post(`${uriBase}/multiply`, {
    num1: previous,
    num2: current,
  });

  return response.data.result;
};

exports.divide = async (previous, current) => {
  const response = await axios.post(`${uriBase}/divide`, {
    num1: previous,
    num2: current,
  });

  return response.data.result;
};
