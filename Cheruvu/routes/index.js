var express = require('express');
var router = express.Router();

var sql = require("mssql");

// config for your database
var config = {
    user: 'SA',
    password: 'Goleon@555$',
    server: 'localhost',
    database: 'farmerDB'
};


/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("GI");

// connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        // query to the database and get the records
        request.query("INSERT INTO Inventory (sl, name, age, modal, village) VALUES (3,'sdv',21,2,'A')", function (err, recordset) {

            if (err) console.log(err)

            console.log("1 record inserted");
            // send records as a response

        });
    });
});










module.exports = router;
