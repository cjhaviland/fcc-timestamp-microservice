// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

// https://github.com/wanasit/chrono
const chrono = require('chrono-node')
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/:date', (req, res) => {
  let unixDate = new Date(Number(req.params.date));
  let natDate = chrono.parseDate(req.params.date);
  
  if (unixDate.isValid()) {
    res.json({
      unix: unixDate.getTime(),
      natural: parseDate(unixDate)
    })
  }
  else if (natDate) {
    res.json({
      unix: new Date(natDate).getTime(),
      natural: parseDate(natDate)
    })
  }
  else {
    res.json({});
  }
});

/*app.get("/dreams", function (request, response) {
  response.send(dreams);
});

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/dreams", function (request, response) {
  dreams.push(request.query.dream);
  response.sendStatus(200);
});

// Simple in-memory store for now
var dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];*/

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

Date.prototype.isValid = function () {
    // An invalid date object returns NaN for getTime() and NaN is the only
    // object not strictly equal to itself.
    return this.getTime() === this.getTime();
}; 

function parseDate(date){
  return months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
}

