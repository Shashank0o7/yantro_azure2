var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var CourseSchema = new mongoose.Schema({
	code:{
		type:String,
		unique:true
	},
	classcode:String,
	price:Number,
	school_name:{
		type:String,
		
	},
	name: String,
	subjects: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Subject"
	}],
	tests:[{
		type: mongoose.Schema.Types.ObjectId,
		ref:"Test"
	}],
	course_detail:String
});
 

module.exports = mongoose.model("Course",CourseSchema);
