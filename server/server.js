// Remember to `npm init` and `npm install express`!
const express = require('express');

const app = express();
// creates boiler plate for server, building server
//Heroku assigns us a unique PORT
//Use 5001 for localhost development
const port = process.env.PORT || 5001;

//Look here for files
app.use(express.static('server/public'))

//Listen for requests for files
app.listen(port, () => {
    console.log(`listening on port: ${port}`)
});