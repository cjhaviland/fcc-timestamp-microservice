exports.mainView = function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
}

exports.checkDate = function (req, res) {
  res.send(req.params.date)
}

module.exports = exports;