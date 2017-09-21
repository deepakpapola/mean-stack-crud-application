var model = require('../models/model.js');
var mongoose = require('mongoose');

module.exports = function(app){
	
	// app.get('/api/users',function(req,res){
	// 	model.find({},function(err,users){
	// 		if(err){
	// 			res.staus(400).send(err);
	// 		}
	// 		else{
	// 			res.status(200).send(users);
	// 		}
	// 	});
	// });


// add user
	app.post('/api/users',function(req,res){
	var newUser = model({
		name:req.body.name,
		age:req.body.age
	});
	newUser.save(function(err,user){
		if(err){
			res.status(500).send(err);
		}
		else{
			res.status(201).send(user);
		}
	});
});
//update user
	app.put('/api/users',function(req,res){
		
		//console.log(req.body);
		model.findById(req.body._id,function(err,userRes){
			if(err){
				res.status(404).send(err);
			}
			else{
				userRes.update(req.body,function(err,success){
					if(err){
						res.status(500).send(err);
					}
					else{
						res.status(201).send({message:"successfuly updated"});
					}
				});
			}
		});
	});


// delete user
	app.delete('/api/users/:id',function(req,res){
		model.remove({_id:req.params.id},function(err,removeRes){
			if(err){
				console.log(err);
				res.status(500).send(err);
			}else{
				res.status(200).send({message:'success on deleting user'});
			}

		})
	});

}