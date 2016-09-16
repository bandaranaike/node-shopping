var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'eranda',
    password: 'password'
});

connection.connect();

var data;

connection.query('SELECT * FROM node_shopping.products', function (err, rows, fields) {
    if (err) throw err;
    data = rows;
});

connection.end();


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Node Shopping', data: data, currency: 'Rs. '});
});

module.exports = router;
