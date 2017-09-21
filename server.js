var Model = require('./models/model.js');
var express = require('express');
var app= express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
var mongoose = require('mongoose');
var morgan = require('morgan');
mongoose.connect('mongodb://localhost:27017/meandb');

var router = express.Router();
//get
router.get('/api/users',function(req,res){

	Model.find({},function(err,users){	
		if(err){ 
			res.staus(400).send(err);
		}
		else{
			res.status(200).send(users);
		}
	});
});

// router.post('/api/users',function(req,res){
// 	//console.log(req.body);
// 	var newUser = Model({
// 		name:req.body.name,
// 		age:req.body.age
// 	});
// 	newUser.save(function(err,user){
// 		if(err){
// 			res.status(500).send(err);
// 		}
// 		else{
// 			res.status(201).send(user);
// 		}
// 	});
// });
app.use('/',router);

var userCtrl = require('./controllers/userCtrl.js');


app.use(morgan('dev'));

app.use(express.static(__dirname+ '/public'));

userCtrl(app);


app.listen(3000,function(){
	console.log("server listening on 3000");
});

