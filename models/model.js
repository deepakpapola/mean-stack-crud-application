var mongoose = require('mongoose');

var schema = mongoose.Schema;

var userSchema = new schema({
	name :{
		type:String,
		required:true
	},
	age:{
		type:Number,
		required:true
	}
});

var model = mongoose.model('users',userSchema);
module.exports=model