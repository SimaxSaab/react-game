const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.get('/select', function(req, res) {
  let fileContent = fs.readFileSync(__dirname + "/data.json", "utf8");
  console.log(fileContent);
  res.end(fileContent);
});

app.post('/post', function(req, res) {
  console.log(req.body);
  fs.writeFile(__dirname + "/data.json", JSON.stringify(req.body), function (err) {
    if (err) throw err;
    console.log('Saved!');});
  console.log('Записано');
});

// app.listen(3030, function () {
//   console.log('Server app listening on 3030!');
// });

app.listen(
  process.env.PORT,
  process.env.IP,
  function(){
      console.log('HelloWorld server is started!');
  }
);