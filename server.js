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
  let dateString = req.params.date;
  let date = req.params.date;
  
  let unixDate = 
  
  // If number passed, check if unix
  if (Number(date)){
    res.json({
      unix: date,
      natural: parseDate(chrono.parse(new Date(Number(date)).toString())[0])
    })
  }
  else{
    let chronoDate = chrono.parse(date)[0];
    
    if (chronoDate){
      res.json({
      unix: chrono.parseDate(date).getTime(),
      natural: parseDate(chronoDate)
    })
    }
    else{
      res.json({})
    }
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

function parseDate(date){
  return months[date.start.knownValues.month - 1] + ' ' + 
      (date.start.knownValues.day ? date.start.knownValues.day : '') +
      (date.start.knownValues.year ? ', ' + date.start.knownValues.year : '');
}

