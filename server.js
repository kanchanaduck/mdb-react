const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/sql', (req, res) => {
  var con = mysql.createConnection({
    host: "10.112.6.12",
    user: "root",
    password: "hittintranet",
    database: "db_hitt_intranet"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO `isc_pong`(`No`, `tname`, `dv_code`, `dp_code`, `date_inform`, `status`, `evaluation`) VALUES ?";
    var values = [
      ['ISC-19-09-007', req.body.name, 'I/T', 'I/T', '2019-09-03','n','p'],
      ['ISC-19-09-002', req.body.name2, 'I/T', 'I/T', '2019-09-03','n','p'],
    ];
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
      res.send({ 
        "success": true,
        "rows": result.affectedRows,
        "data": req.body
      });
    });
  });
});
app.get('/api/hello2', (req, res) => {
  res.send({
      "items": [
        { "id": 1, "name": "Apple",  "img":"apple.png", "price": "$2" },
        { "id": 2, "name": "Avocado", "img":"avocado.png", "price": "$5" },
        { "id": 3, "name": "Banana", "img":"banana.png", "price": "$15" },
        { "id": 4, "name": "Durian", "img":"durian.png", "price": "$5" },
        { "id": 5, "name": "Grapes", "img":"grapes.png", "price": "$22" },
        { "id": 6, "name": "Peache", "img":"peach.png", "price": "$5" },
        { "id": 7, "name": "Coconut", "img":"coconut.png", "price": "$5" },
      ] 
    });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
