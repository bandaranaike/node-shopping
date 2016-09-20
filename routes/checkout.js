var express = require('express');
var session = require('express-session');
var router = express.Router();

var conn = require('./connection');
var connection = conn.connection();

var data;

connection.query('SELECT * FROM node_shopping.products', function (err, rows) {
    if (err) throw err;
    data = rows;
});


router.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));


router.get('/', function (req, res) {
    var cart = req.session.cart;
    if (cart) {
        var ids = Object.keys(cart);
        connection.query('SELECT * FROM node_shopping.products WHERE id IN (' + ids + ')', function (err, rows) {
            if (err) throw err;
            cart_data = rows;
            res.render('checkout', {title: 'Shopping Cart', data: data, currency: 'Rs. ', cart_data: rows, cart: cart});
        });
    } else {
        res.render('checkout', {title: 'Checkout', cart_data: 0});
    }
});
module.exports = router;