var express = require('express');
var app = express();
app.set('view engine', 'ejs');
var mysql = require('mysql')




app.get('/', function(req, res) {
    res.render('pages/home');
});



app.get('/students', function(req, res) {
    var connection = mysql.createConnection({
        host     : 'www.db4free.net',
        user     : 's140390',
        password : 'abc123**',
        database : 'db140390'
      });
    connection.connect()
    var sql = 'select * from students';
    connection.query(sql, function (err, rows, fields) {
        if (err) throw err;

        res.render('pages/students', { students : rows });
   
      })
   
      connection.end()
});


app.get('/subjects', function(req, res) {
    var connection = mysql.createConnection({
        host     : 'www.db4free.net',
        user     : 's140390',
        password : 'abc123**',
        database : 'db140390'
      });
    connection.connect()
    var sql = 'select * from subjects';
    connection.query(sql, function (err, rows, fields) {
        if (err) throw err;

        res.render('pages/subjects', { subjects : rows });
   
      })
   
      connection.end()
});
console.log('App is running at http://localhost:3000/');

app.listen(3000);
