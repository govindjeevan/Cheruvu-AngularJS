
var express    = require('express');
var app        = express();
var mysql      = require('mysql');
var bodyParser = require('body-parser');
var path = require('path');
var morgan = require('morgan');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(express.json());
//app.use(express.urlencoded());
//app.use(app.router);
app.use(express.static('public'));

app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console

var con = mysql.createConnection({
 host: "localhost",
  user: "root",
  password: "Goleon@555$",
  database: "farmerDB"
});


con.connect(function(err) {
    if (err) throw err;
     console.log("Connected!");
   }); 




app.get('/', function(req, res, next) {
console.log("HEY");
res.sendFile(path.join(__dirname + '/index.html'));
});



app.get('/fetchdata',function(req,res){
	var data = {
		"Data":""
	};
	
	con.query("SELECT * from farmerList",function(err, rows, fields){
		if(rows.length != 0){
			data["Data"] = rows;
			res.json(data);
		}else{
			data["Data"] = 'No data Found..';
			res.json(data);
		}   
	});
});


app.post('/data', function(req, res){
    
    var id= req.body.sl;    
    var name= req.body.name;
    var age= req.body.age;
    var mandal= req.body.mandal;
    var village= req.body.village;


    var sql = "INSERT INTO farmerList (id, name, age, mandal, village) VALUES ("+id+",'"+name+"',"+age+",'"+mandal+"','"+village+"')";    
    console.log(sql);
    con.query(sql, function (err, result) {
       if (err) throw err;
       console.log("1 record inserted");
     });
    res.send(sql);
});


http.listen(process.env.PORT || 3000, function(){
    console.log('listening on', http.address().port);
  });

//con.query("INSERT INTO customers (name, adrress) VALUES (?)", name, address, function (err, result) {
