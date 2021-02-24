const express = require('express');
const app = express();
const fs = require('fs');

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.get('/select', function(req, res) {
  let fileContent = fs.readFileSync(__dirname + "/data.json", "utf8");
  console.log(fileContent);
  res.end(fileContent);
});

app.listen(3030, function () {
  console.log('Server app listening on 3030!');
});