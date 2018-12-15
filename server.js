var express = require('express');
var app = express();
var db = require('./database');
var cors = require('cors')
app.use(cors())
var bodyParser = require('body-parser');
app.use(bodyParser.json());//สำคํญต้องใช้
app.use(bodyParser.urlencoded({
    extended: true
}));
// index page
app.get('/', function (req, res) {
    res.send('Express is running');
});

//add routing
// index page
app.get('/', function (req, res) {
    res.send('Express is running');
});

var output = {
    status: 'succes',
    message: 'rest api is working'
}
app.get('/api/json', function (req, res) {
    res.status(200).json(output);

});

app.get('/api/categories', db.getAllProducts);
app.get('/api/detail', db.getAlldetail);



var port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log('App is running on http://localhost:' + port);
});