const express = require('express');
const app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(3030, function () {
  console.log('Server app listening on 3030!');
});