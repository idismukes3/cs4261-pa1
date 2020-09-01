# CS 4261 - Programming Assignment 1

## Prerequisites
* [Node.js](https://nodejs.org/en/download/) 10.x+

## Backend
This app will allow users to make simple math calculations

### Installation, execution, and deployment
Move into the `backend/` folder and run `npm install` to download the necessary dependencies.
Running `npm start` will run the app on port 3000 by default.

### Using the app
This app was hosted with [Heroku](https://dashboard.heroku.com/apps), and the deployed instance can be found [here](https://cs4261-pa1.herokuapp.com).
To make API calls to the server, we recommend using [Postman](https://www.postman.com/) or [cURL](https://curl.haxx.se/).

---
|Endpoint | HTTP Method | Body | Description |
|---|---|---|---|
| /add | POST | { <br>num1: Number<br> num2: Number<br>} | Adds two numbers.|
| /subtract | POST | { <br>num1: Number<br> num2: Number<br>} | Subtracts two numbers.|
| /multiply | POST | { <br>num1: Number<br> num2: Number<br>} | Multiply two numbers.|
| /divide | POST | { <br>num1: Number<br> num2: Number<br>} | Divides two numbers.|
---